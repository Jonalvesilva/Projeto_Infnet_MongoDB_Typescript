import { model, Schema } from "mongoose";

export interface IProfessor {
  nome: string;
  sobrenome: string;
  data_nasc: Date;
  area: string;
  hashId?: string;
}

export const professorSchema = new Schema<IProfessor>({
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
  area: {
    required: true,
    type: Schema.Types.String,
  },
  hashId: { type: Schema.Types.String },
});
export const Professor = model<IProfessor>("Professor", professorSchema);
