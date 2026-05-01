import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto';
import { ApiLogin, ApiRegister } from './decorators/swagger-auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiLogin()
  login(@Body('document') document:string, @Body('password') password:string){
    return this.authService.login(document,password)
  }

  @Post('register')
  @ApiRegister()
  register(@Body() createUserDto:CreateUserDto){
    return this.authService.register(createUserDto)
  }
}
