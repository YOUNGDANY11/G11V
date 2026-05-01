import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto, ResponseUserDto } from 'src/users/dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService:JwtService
  ){}

  async login(document:string,password:string){
    try{
      const user = await this.usersService.findOneByDocument(document)
      if(!user) throw new NotFoundException({status:'Error',mensaje:'No existe ningun usuario con este numero de documento'})
      
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) throw new BadRequestException({status:'Error', mensaje:'Contraseña incorrecta'})

      const playload = {
        id: user.id_user,
        name: user.name,
        lastname:user.lastname,
        document:user.document,
        email:user.email,
        }

        return {
          status:'Success',
          mensaje:'Inicio de sesion exitoso',
          token: this.jwtService.sign(playload)
        }
    }catch(error){
      throw error
    }
  }

  async register(createUserDto:CreateUserDto){
    try{
      const existsUser = await this.usersService.findOneByDocument(createUserDto.document)
      if(existsUser) throw new BadRequestException({status:'Error',mensaje:'Usuario ya registrado con este numero de documento'})
      const {user} = await this.usersService.create(createUserDto)
      return{
        status:'Success',
        mensaje:'Usuario creado con exito',
        user: user
      }
    }catch(error){
      throw error
    }
  }
}
