import { Service } from "typedi";
import { SignInDto } from "./dtos/sign-in.dto";
import { BadRequestError } from "routing-controllers";
import { FuncionarioService } from "../funcionarios/funcionarios.service";
import { JwtService } from "../auth/jwt.service";

@Service()
export class AuthService {
  constructor(
    private readonly funcionarioService: FuncionarioService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(signInDto: SignInDto) {
    const funcionario = await this.funcionarioService.findByEmailPassword(
      signInDto
    );

    if (funcionario === null) {
      throw new BadRequestError("Este usuário não existe.");
    } else if (funcionario.senha !== signInDto.senha) {
      throw new BadRequestError(
        "O email do usuário ou senha digitados não estão corretos."
      );
    }

    const payload = {
      nome: funcionario.nome,
      sobrenome: funcionario.sobrenome,
      email: funcionario.email,
    };

    const token = this.jwtService.sign(payload);
    return {
      funcionario,
      token,
    };
  }
  async signUp() {
    /*const maybeFuncionario = await this.funcionarioService.findByEmail(
        signInDto.email
      );
      if (maybeFuncionario !== null) {
        throw new BadRequestError(
          "Este email já está sendo utilizado por outro funcionário"
        );
      }*/
  }
}
