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
import { ProfessoresService } from "./professores.service";
import { CreateProfessorDto } from "./dtos/create-professor.dto";
import { UpdateProfessorDto } from "./dtos/update-professor.dto";

@Service()
@JsonController("/professores")
export class ProfessoresController {
  constructor(private readonly professoresService: ProfessoresService) {}

  @Get()
  async getAll() {
    const professores = await this.professoresService.getAll();
    return professores;
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    const professor = await this.professoresService.getById(id);
    return professor;
  }

  @Post()
  async create(@Body() createProfessorDto: CreateProfessorDto) {
    const professor = await this.professoresService.create(createProfessorDto);
    return professor;
  }

  @Put("/:id")
  async update(
    @Param("id") id: string,
    @Body() updateProfessorDto: UpdateProfessorDto
  ) {
    const professor = await this.professoresService.update(
      id,
      updateProfessorDto
    );
    return professor;
  }

  @Delete("/:id")
  async delete(@Param("id") id: string) {
    const professor = await this.professoresService.delete(id);
    return professor;
  }
}
