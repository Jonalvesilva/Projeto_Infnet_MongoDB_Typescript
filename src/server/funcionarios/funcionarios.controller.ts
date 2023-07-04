import {
  JsonController,
  Authorized,
  Get,
  CurrentUser,
} from "routing-controllers";
import type { Funcionario } from "../../shared/types";
import { Service } from "typedi";

@Service()
@JsonController("/funcionarios")
export class FuncionariosController {
  constructor() {}

  @Authorized()
  @Get("/auth/myself")
  async getMyself(@CurrentUser() funcionario: Funcionario) {
    return funcionario;
  }
}
