import { JsonController } from "routing-controllers";
import { Service } from "typedi";

@Service()
@JsonController("/funcionarios")
export class FuncionariosController {
  constructor() {}
}
