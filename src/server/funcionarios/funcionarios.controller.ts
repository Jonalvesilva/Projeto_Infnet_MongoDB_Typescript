import { JsonController } from "routing-controllers";
import { Service } from "typedi";

@Service()
@JsonController("/professores")
export class ProfessoresController {
  constructor() {}
}
