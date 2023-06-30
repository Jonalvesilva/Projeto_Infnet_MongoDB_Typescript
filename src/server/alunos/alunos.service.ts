import { Service } from "typedi";
import { AlunosRepository } from "./alunos.repository";
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";

@Service()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository) {}

  async getAll() {
    const alunos = await this.alunosRepository.getAll();
    return alunos;
  }

  async getById(id: string) {
    const aluno = await this.alunosRepository.getById(id);
    return aluno;
  }

  async create(createAlunoDto: CreateAlunoDto) {
    const aluno = await this.alunosRepository.create(createAlunoDto);
    return aluno;
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto) {
    const aluno = await this.alunosRepository.update(id, updateAlunoDto);
    return aluno;
  }

  async delete(id: string) {
    const aluno = await this.alunosRepository.delete(id);
    return aluno;
  }
}
