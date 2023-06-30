import { Service } from "typedi";
import { Professor } from "./professores.model";
import { CreateProfessorDto } from "./dtos/create-professor.dto";
import { UpdateProfessorDto } from "./dtos/update-professor.dto";

@Service()
export class ProfessoresRepository {
  constructor() {}

  async getAll() {
    const professores = await Professor.find().lean();
    return professores;
  }
  async getById(id: string) {
    const professor = await Professor.findById(id).lean();
    return professor;
  }
  async create(createProfessorDto: CreateProfessorDto) {
    const professor = (await Professor.create(createProfessorDto)).toJSON();
    return professor;
  }
  async update(id: string, updateProfessorDto: UpdateProfessorDto) {
    const professor = await Professor.findByIdAndUpdate(
      id,
      updateProfessorDto
    ).lean();
    return professor;
  }
  async delete(id: string) {
    const professor = await Professor.findByIdAndDelete(id).lean();
    return professor;
  }
}
