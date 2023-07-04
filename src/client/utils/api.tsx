import axios from "axios";
import toast from "react-simple-toasts";
import { Toast } from "../components/Toast";
import { browserHistory } from "../browserHistory";
import { useGlobalStore, initialFuncionario } from "../useGlobalStore";
import { AuthToken } from "../utils/authToken";

const setIsLoading = useGlobalStore.getState().setIsLoading;
const setIsAuthenticated = useGlobalStore.getState().setIsAuthenticated;
const setFuncionario = useGlobalStore.getState().setFuncionario;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

api.interceptors.request.use((config) => {
  const token = AuthToken.get();
  setIsLoading(true);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => {
    setIsLoading(false);
    return response;
  },

  (error) => {
    setIsLoading(false);
    const httpStatus = error.response.status;
    const data = error.response.data;

    if (httpStatus === 400) {
      if (error.response.data.errors) {
        const errors: string[] = error.response.data.errors
          .map(({ constraints }: any) => Object.values(constraints))
          .flat();
        errors.forEach((error) => {
          toast(error, {
            render(error) {
              return (
                <Toast
                  message={error}
                  className="bg-red-600 py-1 px-4 text-white text-lg rounded-full"
                />
              );
            },
          });
        });
      } else if (data.message) {
        toast(data.message, {
          render(error) {
            return (
              <Toast
                message={error}
                className="bg-red-600 py-1 px-4 text-white text-lg rounded-full"
              />
            );
          },
        });
      }
    }

    if (httpStatus === 401) {
      toast("Sessão expirada. Entre Novamente", {
        render(error) {
          return (
            <Toast
              message={error}
              className="bg-blue-600 py-1 px-4 text-white text-lg rounded-full"
            />
          );
        },
      });
      AuthToken.remove();
      setFuncionario(initialFuncionario);
      setIsAuthenticated(false);
      browserHistory.push("/");
    }

    if (httpStatus === 500) {
      if (data.name === "TokenExpiredError") {
        toast("Sessão expirada. Entre Novamente", {
          render(error) {
            return (
              <Toast
                message={error}
                className="bg-blue-600 py-1 px-4 text-white text-lg rounded-full"
              />
            );
          },
        });
        AuthToken.remove();
        setFuncionario(initialFuncionario);
        setIsAuthenticated(false);
        browserHistory.push("/");
      }
    }
  }
);
