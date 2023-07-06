import { api } from "../api";

export async function getProfessores() {
  const res = await api.get("/professores");
  return res.data;
}
