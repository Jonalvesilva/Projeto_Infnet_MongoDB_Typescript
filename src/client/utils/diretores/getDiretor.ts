import { api } from "../api";

export async function getDiretor(id: string) {
  const res = await api.get(`/diretores/${id}`);
  return res.data;
}
