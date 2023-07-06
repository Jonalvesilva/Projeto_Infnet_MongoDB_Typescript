import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function createProfessor(professor: Generic) {
  const res = await api.post(`/professores`, professor);
  return res.data;
}
