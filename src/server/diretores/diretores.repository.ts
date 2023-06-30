import { Service } from "typedi";
import { Diretor } from "./diretores.model";
import { CreateDiretorDto } from "./dtos/create-diretor.dto";
import { UpdateDiretorDto } from "./dtos/update-diretor.dto";

@Service()
export class DiretoresRepository {
  constructor() {}

  async getAll() {
    const diretores = await Diretor.find().lean();
    return diretores;
  }
  async getById(id: string) {
    const diretor = await Diretor.findById(id).lean();
    return diretor;
  }
  async create(createDiretorDto: CreateDiretorDto) {
    const diretor = (await Diretor.create(createDiretorDto)).toJSON();
    return diretor;
  }
  async update(id: string, updateDiretorDto: UpdateDiretorDto) {
    const diretor = await Diretor.findByIdAndUpdate(
      id,
      updateDiretorDto
    ).lean();
    return diretor;
  }
  async delete(id: string) {
    const diretor = await Diretor.findByIdAndDelete(id).lean();
    return diretor;
  }
}
