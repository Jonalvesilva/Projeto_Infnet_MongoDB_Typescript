import axios from "axios";
import toast from "react-simple-toasts";
import { Toast } from "../components/Toast";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const httpStatus = error.response.status;
    const data = error.response.data;

    if (httpStatus === 400) {
      toast(data.message, {
        render(message) {
          return (
            <Toast
              className="bg-red-600 py-1 px-4 text-white text-lg rounded-full"
              message={message}
            />
          );
        },
      });
    }
  }
);
