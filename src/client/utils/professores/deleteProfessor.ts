import { api } from "../api";

export async function deleteProfessor(id: string) {
  const res = await api.delete(`/professores/${id}`);
  const professor = res.data;
  return professor;
}
