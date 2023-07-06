import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function updateDiretor(diretor: Generic, id: string) {
  const res = await api.put(`/diretores/${id}`, diretor);
  return res.data;
}
