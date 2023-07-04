import { useEffect } from "react";
import { getMyself } from "../utils/getMyself";

export function RoutesAuthChecker() {
  async function authChecker() {
    await getMyself();
  }

  useEffect(() => {
    authChecker();
  }, []);
  return null;
}
