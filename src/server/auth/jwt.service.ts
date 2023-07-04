import { Service } from "typedi";
import * as jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET as string;

@Service()
export class JwtService {
  constructor() {}

  verify(token: string): jwt.JwtPayload | null {
    const payload = jwt.verify(token, jwtSecret);
    return payload as any;
  }
  sign(payload: any) {
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "30d",
    });
    return token;
  }
}
