export type Funcionario = {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  created_at: string;
};

export type Generic = {
  nome: string;
  sobrenome: string;
  data_nasc: Date;
  turma?: string;
  area?: string;
  hashId?: string;
};
