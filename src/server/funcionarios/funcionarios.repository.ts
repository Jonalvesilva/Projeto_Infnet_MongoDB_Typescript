import { Service } from "typedi";
import { SignInDto } from "../auth/dtos/sign-in.dto";
import { Funcionario } from "./funcionarios.model";

@Service()
export class FuncionariosRepository {
  constructor() {}

  async findByEmailPassword({ email, senha }: SignInDto) {
    const funcionario = await Funcionario.findOne({ email, senha }).lean();
    return funcionario;
  }
  async findByEmail(email: string) {
    const funcionario = await Funcionario.findOne({ email }).lean();
    return funcionario;
  }
  async create() {}
}
