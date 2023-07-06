import { api } from "../api";

export async function getAlunos() {
  const res = await api.get("/alunos");
  return res.data;
}
