import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { connect } from "mongoose";
import { AlunosController } from "./alunos/alunos.controller";
import { ProfessoresController } from "./professores/professores.controller";
import { DiretoresController } from "./diretores/diretores.controller";
import { AuthController } from "./auth/auth.controller";
import { FuncionariosController } from "./funcionarios/funcionarios.controller";
import { authorizationChecker } from "./auth/checkers/authorizationChecker";
import { currentUserChecker } from "./auth/checkers/currentUserChecker";

useContainer(Container);

const port = process.env.PORT as string;
const host = process.env.HOST as string;

const controllers = [
  AlunosController,
  DiretoresController,
  ProfessoresController,
  AuthController,
  FuncionariosController,
];

createExpressServer({
  cors: true,
  controllers: controllers,
  currentUserChecker,
  authorizationChecker,
}).listen(port, host, async () => {
  await connect(process.env.DATABASE_URL as string);
  console.log(`Servidor iniciado em http://${host}:${port}`);
});
