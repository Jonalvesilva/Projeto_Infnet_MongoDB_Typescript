import { model, Schema } from "mongoose";

export interface IAluno {
  nome: string;
  sobrenome: string;
  data_nasc: Date;
  turma: string;
}

export const alunoSchema = new Schema<IAluno>({
  nome: {
    required: true,
    type: Schema.Types.String,
    min: 3,
    max: 20,
  },
  sobrenome: {
    required: true,
    type: Schema.Types.String,
    min: 3,
    max: 20,
  },
  data_nasc: {
    required: true,
    type: Schema.Types.Date,
  },
  turma: {
    required: true,
    type: Schema.Types.String,
  },
});
export const Aluno = model<IAluno>("Aluno", alunoSchema);
