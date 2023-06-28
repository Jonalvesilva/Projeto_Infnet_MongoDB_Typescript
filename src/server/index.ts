import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { connect } from "mongoose";

useContainer(Container);

const port = process.env.PORT as string;
const host = process.env.HOST as string;

createExpressServer({
  cors: true,
  controllers: [],
}).listen(port, host, async () => {
  await connect(process.env.DATABASE_URL as string);
  console.log(`Servidor iniciado em http://${host}:${port}`);
});
