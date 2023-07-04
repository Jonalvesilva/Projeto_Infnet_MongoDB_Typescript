import { api } from "./api";
import { Funcionario } from "../../shared/types";

type SignInOutput =
  | {
      success: false;
      token: null;
      funcionario: null;
    }
  | {
      success: true;
      token: string;
      funcionario: Funcionario;
    };

export async function signIn(
  email: string,
  senha: string
): Promise<SignInOutput> {
  const response = await api.post("/auth/sign-in", { email, senha });
  return response.data;
}
