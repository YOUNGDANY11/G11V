import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body('document') document:string, @Body('password') password:string){
    return this.authService.login(document,password)
  }

  @Post('register')
  register(@Body() createUserDto:CreateUserDto){
    return this.authService.register(createUserDto)
  }
}
