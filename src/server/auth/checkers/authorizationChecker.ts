import { Action } from "routing-controllers";
import { JwtService } from "../jwt.service";
import { Funcionario } from "../../funcionarios/funcionarios.model";

const jwtService = new JwtService();

export async function authorizationChecker(action: Action) {
  const token = extractTokenFromHeader(action);
  if (token === null) {
    return false;
  }
  const payload = jwtService.verify(token);
  if (payload === null) {
    return false;
  }

  const userId = payload.id;

  const user = await Funcionario.findById(userId);

  if (user === null) {
    return false;
  }
  action.request.user = user;
  return true;
}

function extractTokenFromHeader(action: Action) {
  if (!action.request.headers.authorization) {
    return null;
  }

  const [bearer, token] = action.request.headers.authorization.split(" ");
  if (bearer !== "Bearer" || !token) {
    return null;
  }

  return token;
}
