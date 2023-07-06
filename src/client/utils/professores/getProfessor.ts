import { api } from "../api";

export async function getProfessor(id: string) {
  const res = await api.get(`/professores/${id}`);
  return res.data;
}
