import { Service } from "typedi";
import { ProfessoresRepository } from "./professores.repository";
import { CreateProfessorDto } from "./dtos/create-professor.dto";
import { UpdateProfessorDto } from "./dtos/update-professor.dto";

@Service()
export class ProfessoresService {
  constructor(private readonly professoresRepository: ProfessoresRepository) {}

  async getAll() {
    const professores = await this.professoresRepository.getAll();
    professores.map((element) => {
      element.hashId = element._id.toHexString();
    });
    return professores;
  }

  async getById(id: string) {
    const professor = await this.professoresRepository.getById(id);
    return professor;
  }

  async create(createProfessorDto: CreateProfessorDto) {
    const professor = await this.professoresRepository.create(
      createProfessorDto
    );
    return professor;
  }

  async update(id: string, updateProfessorDto: UpdateProfessorDto) {
    const professor = await this.professoresRepository.update(
      id,
      updateProfessorDto
    );
    return professor;
  }

  async delete(id: string) {
    const professor = await this.professoresRepository.delete(id);
    return professor;
  }
}
