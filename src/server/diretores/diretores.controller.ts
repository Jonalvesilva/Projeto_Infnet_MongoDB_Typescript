import {
  JsonController,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "routing-controllers";
import { Service } from "typedi";
import { DiretoresService } from "./diretores.service";
import { CreateDiretorDto } from "./dtos/create-diretor.dto";
import { UpdateDiretorDto } from "./dtos/update-diretor.dto";

@Service()
@JsonController("/diretores")
export class DiretoresController {
  constructor(private readonly diretoresService: DiretoresService) {}

  @Get()
  async getAll() {
    const diretores = await this.diretoresService.getAll();
    return diretores;
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    const diretor = await this.diretoresService.getById(id);
    return diretor;
  }

  @Post()
  async create(@Body() createDiretorDto: CreateDiretorDto) {
    const diretor = await this.diretoresService.create(createDiretorDto);
    return diretor;
  }

  @Put("/:id")
  async update(
    @Param("id") id: string,
    @Body() updateDiretorDto: UpdateDiretorDto
  ) {
    const diretor = await this.diretoresService.update(id, updateDiretorDto);
    return diretor;
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    const diretor = await this.diretoresService.delete(id);
    return diretor;
  }
}
