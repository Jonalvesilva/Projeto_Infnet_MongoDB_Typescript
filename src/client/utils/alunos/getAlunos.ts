import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function getAlunos() {
  const res = await api.get("/alunos");
  return res.data;
}
