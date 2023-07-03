import { browserHistory } from "../browserHistory";
import { AuthToken } from "./authToken";
import { useGlobalStore, initialFuncionario } from "../useGlobalStore";
import { createToast } from "react-simple-toasts";

const setIsAuthenticated = useGlobalStore.getState().setIsAuthenticated;
const setFuncionario = useGlobalStore.getState().setFuncionario;

export function logout() {
  const customToast = createToast({ theme: "dark" });
  customToast("Você encerrou sua sessão. Até logo");
  AuthToken.remove();
  setFuncionario(initialFuncionario);
  setIsAuthenticated(false);
  browserHistory.push("/");
}
