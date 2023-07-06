import { api } from "../api";

export async function deleteDiretor(id: string) {
  const res = await api.delete(`/diretores/${id}`);
  const diretor = res.data;
  return diretor;
}
