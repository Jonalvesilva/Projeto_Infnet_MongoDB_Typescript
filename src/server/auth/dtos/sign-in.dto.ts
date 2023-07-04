import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class SignInDto {
  @IsString()
  @IsEmail(undefined, {
    message: "O email digitado é inválido",
  })
  email: string;

  @MinLength(8, {
    message: "A senha precisa ter no mínimo 8 caracteres",
  })
  @MaxLength(48, {
    message: "A senha precisa ter no máximo 48 caracteres",
  })
  @IsString()
  senha: string;
}
