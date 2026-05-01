import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ILike, Not, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto, ResponseUserDto, UpdateUserDto } from './dto';
import { RolesService } from 'src/roles/roles.service';
import * as bcrypt from 'bcryptjs'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository:Repository<User>,
    private readonly rolesService:RolesService
  ){}

  async findOneByDocument(document:string){
    const user = await this.userRepository.findOneBy({document})
    return user
  }

  async findAll(){
    try{
      const users = await this.userRepository.find({relations:['role']})
      if(users.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No hay usuarios registrados'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        users: plainToInstance(ResponseUserDto,users,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findOneById(id_user:number){
    try{
      const user = await this.userRepository.findOne({where:{id_user}, relations:['role']})
      if(!user) throw new NotFoundException({status:'Error',mensaje:'No existe este usuario'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        user:plainToInstance(ResponseUserDto,user,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async existsById(id_user){
    const user = await this.userRepository.findOne({where:{id_user},relations:['role']})
    if(!user) throw new NotFoundException({status:'Error',mensaje:'No existe este usuario'})
    return user
  }

  async findByName(name:string){
    try{
      const user = await this.userRepository.find({where:{name:ILike(`%${name}%`)},relations:['role']})
      if(user.length === 0) throw new NotFoundException({status:'Error',mensaje:'No existe un usuario con este nombre'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        user: plainToInstance(ResponseUserDto,user,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async existsByName(name:string){
    const user = await this.userRepository.findOneBy({name})
    return user
  }

  async findByLastName(lastname:string){
    try{
      const user = await this.userRepository.find({where:{lastname:ILike(`%${lastname}%`)},relations:['role']})
      if(user.length === 0) throw new NotFoundException({status:'Error',mensaje:'No existe un usuario con este apellido'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        user: plainToInstance(ResponseUserDto,user,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async existsByLastname(lastname:string){
    const user = await this.userRepository.findOneBy({lastname})
    return user
  }

  async findByEmail(email:string){
    try{
      const user = await this.userRepository.find({where:{email:ILike(`%${email}%`)},relations:['role']})
      if(user.length === 0) throw new NotFoundException({status:'Error',mensaje:'No existe un usuario con este correo'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        user: plainToInstance(ResponseUserDto,user,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByDocument(document:string){
    try{
      const user = await this.userRepository.find({where:{document:ILike(`%${document}%`)},relations:['role']})
      if(user.length === 0) throw new NotFoundException({status:'Error',mensaje:'No existe un usuario con este documento'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        user: plainToInstance(ResponseUserDto,user,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async create(createUserDto:CreateUserDto){
    try{
      const {email,document, id_role} = createUserDto
      const existsEmail = await this.userRepository.findOneBy({email})
      if(existsEmail) throw new BadRequestException({status:'Error',mensaje:'Este correo ya esta registrado por otro usuario'})
      const existsDocument = await this.userRepository.findOneBy({document})
      if(existsDocument) throw new BadRequestException({status:'Error',mensaje:'Este documento ya esta registrado por otro usuario'})
      const existsRole = await this.rolesService.findOneById(id_role)

      const password = await bcrypt.hash(createUserDto.password,10)
      const user = await this.userRepository.save({...createUserDto,password})
      return{
        status:'Success',
        mensaje:'Usuario creado con exito',
        user:plainToInstance(ResponseUserDto,user)
      }
    }catch(error){
      throw error
    }
  }

  async update(id_user:number, updateUserDto:UpdateUserDto){
    try{
      const {email,document,id_role} = updateUserDto
      const existsUser = await this.existsById(id_user)
      if(email && email !== existsUser.email){
        const existsUserByEmail = await this.userRepository.findOneBy({email})
        if(existsUserByEmail) throw new BadRequestException({status:'Error',mensaje:'Correo en uso por otro usuario'})
      }
      if(document && document !== existsUser.document){
        const existsUserByDocument = await this.userRepository.findOneBy({document})
        if(existsUserByDocument) throw new BadRequestException({status:'Error',mensaje:'Documento en uso por otro usuario'})
      }
      
      if(id_role){
        const existsRole = await this.rolesService.findOneById(id_role)
      }
      if(updateUserDto.password){
        const password = await bcrypt.hash(updateUserDto.password,10)
        updateUserDto.password = password
      }
      const user = await this.userRepository.merge(existsUser,updateUserDto)
      await this.userRepository.save(user)
      return{
        status:'Success',
        mensaje:'Usuario actualizado con exito',
        user: plainToInstance(ResponseUserDto,user)
      }
    }catch(error){
      throw error
    }
  }

  async delete(id_user:number){
    try{
      const user = await this.existsById(id_user)
      await this.userRepository.remove(user)
      return{
        status:'Success',
        mensaje:'Usuario eliminado con exito'
      }
    }catch(error){
      throw error
    }
  }
  
}
