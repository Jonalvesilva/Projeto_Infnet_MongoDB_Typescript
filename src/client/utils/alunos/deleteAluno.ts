import { api } from "../api";

export async function deleteAluno(id: string) {
  const res = await api.delete(`/alunos/${id}`);
  const aluno = res.data;
  return aluno;
}
