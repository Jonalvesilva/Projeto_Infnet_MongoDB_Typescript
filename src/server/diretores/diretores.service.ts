import { Service } from "typedi";
import { DiretoresRepository } from "./diretores.repository";
import { CreateDiretorDto } from "./dtos/create-diretor.dto";
import { UpdateDiretorDto } from "./dtos/update-diretor.dto";

@Service()
export class DiretoresService {
  constructor(private readonly diretoresRepository: DiretoresRepository) {}

  async getAll() {
    const diretores = await this.diretoresRepository.getAll();
    return diretores;
  }

  async getById(id: string) {
    const diretor = await this.diretoresRepository.getById(id);
    return diretor;
  }

  async create(createDiretorDto: CreateDiretorDto) {
    const diretor = await this.diretoresRepository.create(createDiretorDto);
    return diretor;
  }

  async update(id: string, updateDiretorDto: UpdateDiretorDto) {
    const diretor = await this.diretoresRepository.update(id, updateDiretorDto);
    return diretor;
  }

  async delete(id: string) {
    const diretor = await this.diretoresRepository.delete(id);
    return diretor;
  }
}
