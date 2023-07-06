import { api } from "../api";

export async function getAluno(id: string) {
  const res = await api.get(`/alunos/${id}`);
  return res.data;
}
