import { api } from "./api";
import { Funcionario } from "../../shared/types";

export async function getMyself(): Promise<Omit<Funcionario, "senha">> {
  const user = await api.get("/funcionarios/auth/myself");
  return user.data._doc;
}
