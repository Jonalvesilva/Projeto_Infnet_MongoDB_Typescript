import { Service } from "typedi";
import { JsonController, Post, Body } from "routing-controllers";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

@Service()
@JsonController("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-in")
  async signIn(@Body() signInDto: SignInDto) {
    const response = await this.authService.signIn(signInDto);
    return response;
  }

  @Post("/sign-up")
  async signUp(@Body() signUpDto: SignUpDto) {
    const response = await this.authService.signUp(signUpDto);
    return response;
  }
}
