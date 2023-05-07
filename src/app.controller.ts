import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';

@Controller()
export class AppController {

  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.createUser(createUserDto);
    return { user };
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto){
    const jwt = await this.authService.login(loginUserDto);
    return jwt;
  }
}
