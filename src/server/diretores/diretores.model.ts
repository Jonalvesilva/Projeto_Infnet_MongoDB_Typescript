import { model, Schema } from "mongoose";

export interface IDiretor {
  nome: string;
  sobrenome: string;
  data_nasc: Date;
  area: string;
  hashId?: string;
}

export const diretorSchema = new Schema<IDiretor>({
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
export const Diretor = model<IDiretor>("Diretor", diretorSchema);
