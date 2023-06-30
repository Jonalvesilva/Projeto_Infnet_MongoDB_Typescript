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
import { AlunosService } from "./alunos.service";
import { CreateAlunoDto } from "./dtos/create-aluno.dto";
import { UpdateAlunoDto } from "./dtos/update-aluno.dto";

@Service()
@JsonController("/alunos")
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Get()
  async getAll() {
    const alunos = await this.alunosService.getAll();
    return alunos;
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    const aluno = await this.alunosService.getById(id);
    return aluno;
  }

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    const aluno = await this.alunosService.create(createAlunoDto);
    return aluno;
  }

  @Put("/:id")
  async update(
    @Param("id") id: string,
    @Body() updateAlunoDto: UpdateAlunoDto
  ) {
    const aluno = await this.alunosService.update(id, updateAlunoDto);
    return aluno;
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    const aluno = await this.alunosService.delete(id);
    return aluno;
  }
}
