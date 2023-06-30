import { MinLength, MaxLength } from "class-validator";
import { IAluno } from "../alunos.model";

export class CreateAlunoDto implements IAluno {
  @MinLength(3)
  @MaxLength(20)
  nome: string;

  @MinLength(3)
  @MaxLength(20)
  sobrenome: string;

  data_nasc: Date;
  turma: string;
}
