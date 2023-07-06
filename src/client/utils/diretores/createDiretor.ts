import { api } from "../api";
import { Generic } from "../../../shared/types";

export async function createDiretor(diretor: Generic) {
  const res = await api.post(`/diretores`, diretor);
  return res.data;
}
