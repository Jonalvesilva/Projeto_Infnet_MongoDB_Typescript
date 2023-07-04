import { Service } from "typedi";
import { FuncionariosRepository } from "./funcionarios.repository";
import { SignInDto } from "../auth/dtos/sign-in.dto";
import { SignUpDto } from "../auth/dtos/sign-up.dto";

@Service()
export class FuncionarioService {
  constructor(
    private readonly funcionariosRepository: FuncionariosRepository
  ) {}

  async findByEmailPassword(signInDto: SignInDto) {
    const funcionario = await this.funcionariosRepository.findByEmailPassword(
      signInDto
    );
    return funcionario;
  }
  async findByEmail(email: string) {
    const funcionario = await this.funcionariosRepository.findByEmail(email);
    return funcionario;
  }
  async create(signUpDto: SignUpDto) {
    const funcionario = await this.funcionariosRepository.create(signUpDto);
    return funcionario;
  }
}
