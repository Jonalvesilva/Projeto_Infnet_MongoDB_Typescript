import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function updateAluno(aluno: Generic, id: string) {
  const res = await api.put(`/alunos/${id}`, aluno);
  return res.data;
}
