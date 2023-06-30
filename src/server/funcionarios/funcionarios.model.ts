import { model, Schema } from "mongoose";

export interface IFuncionario {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  created_at: Date;
}

export const funcionarioSchema = new Schema<IFuncionario>({
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
  email: {
    required: true,
    type: Schema.Types.String,
  },
  senha: {
    required: true,
    type: Schema.Types.String,
  },
  created_at: {
    required: true,
    type: Schema.Types.Date,
  },
});
export const Funcionario = model<IFuncionario>(
  "Funcionario",
  funcionarioSchema
);
