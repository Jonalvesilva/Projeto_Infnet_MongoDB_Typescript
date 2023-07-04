import { Service } from "typedi";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";
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
    const maybeFuncionario = await this.funcionarioService.findByEmail(
      signInDto.email
    );

    if (maybeFuncionario === null) {
      throw new BadRequestError(
        "Não há funcionários cadastrados com este email"
      );
    }

    const funcionario = await this.funcionarioService.findByEmailPassword(
      signInDto
    );

    if (funcionario === null) {
      throw new BadRequestError("A senha digitada está incorreta.");
    }

    const payload = {
      id: funcionario._id,
      nome: funcionario.nome,
      sobrenome: funcionario.sobrenome,
      email: funcionario.email,
    };

    const token = this.jwtService.sign(payload);

    return {
      success: true,
      funcionario,
      token,
    };
  }
  async signUp(signUpDto: SignUpDto) {
    const maybeFuncionario = await this.funcionarioService.findByEmail(
      signUpDto.email
    );
    if (maybeFuncionario !== null) {
      throw new BadRequestError(
        "Este email já está sendo utilizado por outro funcionário"
      );
    }

    const date = new Date();
    const funcionario = await this.funcionarioService.create({
      ...signUpDto,
      created_at: date,
    });

    const payload = {
      id: funcionario._id,
      nome: funcionario.nome,
      sobrenome: funcionario.sobrenome,
      email: funcionario.email,
    };

    const jwt = this.jwtService.sign(payload);

    return {
      success: true,
      funcionario,
      jwt,
    };
  }
}
