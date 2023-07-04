import { useGlobalStore } from "../useGlobalStore";
import { AuthToken } from "../utils/authToken";
import { getMyself } from "../utils/getMyself";
import { useEffect } from "react";

export function AuthChecker() {
  const isAuthenticated = useGlobalStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useGlobalStore(
    (state) => state.setIsAuthenticated
  );
  const setFuncionario = useGlobalStore((state) => state.setFuncionario);

  async function authChecker() {
    if (isAuthenticated) {
      return;
    }

    const token = AuthToken.get();

    if (!token) {
      return;
    }

    const myself = await getMyself();
    setIsAuthenticated(true);
    setFuncionario(myself);
  }

  useEffect(() => {
    authChecker();
  }, [isAuthenticated]);
  return null;
}
