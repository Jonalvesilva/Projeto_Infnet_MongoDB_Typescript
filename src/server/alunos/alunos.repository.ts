import { Service } from "typedi";
import { Aluno } from "./alunos.model";
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";

@Service()
export class AlunosRepository {
  constructor() {}

  async getAll() {
    const alunos = await Aluno.find().lean();
    return alunos;
  }
  async getById(id: string) {
    const aluno = await Aluno.findById(id).lean();
    return aluno;
  }
  async create(createTrainerDto: CreateAlunoDto) {
    const aluno = (await Aluno.create(createTrainerDto)).toJSON();
    return aluno;
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto) {
    const aluno = await Aluno.findByIdAndUpdate(id, updateAlunoDto).lean();
    return aluno;
  }
  async delete(id: string) {
    const aluno = await Aluno.findByIdAndDelete(id).lean();
    return aluno;
  }
}
