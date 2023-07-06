import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function createAluno(aluno: Generic) {
  const res = await api.post(`/alunos`, aluno);
  return res.data;
}
