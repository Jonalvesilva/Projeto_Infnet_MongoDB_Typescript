import { api } from "../api";

export async function getDiretores() {
  const res = await api.get("/diretores");
  return res.data;
}
