import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function updateProfessor(professor: Generic, id: string) {
  const res = await api.put(`/professores/${id}`, professor);
  return res.data;
}
