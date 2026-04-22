import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalInformation } from './entities/personal_information.entity';
import { In, JoinTable, Not, Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { plainToInstance } from 'class-transformer';
import { CreatePersonalInformationDto, ResponsePersonalInformationDto, UpdatePersonalInformationDto } from './dto';
import { join } from 'path';

@Injectable()
export class PersonalInformationsService {
  constructor(
    @InjectRepository(PersonalInformation) private perInfRepository:Repository<PersonalInformation>,
    private readonly usersService:UsersService
  ){}

  async findAll(){
    try{
      const personal_information = await this.perInfRepository.find({relations:['user']})
      if(personal_information.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No hay informacion personal registrada'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        personal_information: plainToInstance(ResponsePersonalInformationDto,personal_information, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findOneById(id_per_inf:number){
    try{  
      const personal_information = await this.perInfRepository.findOne({where:{id_per_inf},relations:['user']})
      if(!personal_information) throw new NotFoundException({status:'Error',mensaje:'No existe esta informacion personal'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        personal_information:plainToInstance(ResponsePersonalInformationDto,personal_information,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async existsById(id_per_inf:number){
    const personal_information = await this.perInfRepository.findOne({where:{id_per_inf},relations:['user']})
    return personal_information
  }

  async existsByUserId(id_user:number){
    const personal_information = await this.perInfRepository.findOne({where:{id_user},relations:['user']})
    if(!personal_information) throw new NotFoundException({status:'Error',mensaje:'No existe registro de este usuario con informacion personal'})
    return personal_information
  }

  async findByUserName(name:string){
    try{
      const { user } = await this.usersService.findByName(name)
      const usersId = user.map( u => u.id_user)
      const personal_information = await this.perInfRepository.find({where:{id_user:In(usersId)}, relations:['user']})
      if(personal_information.length === 0) throw new NotFoundException({status:'Error',mensaje:'No existe registro de este usuario con informacion personal o usuario inexistente'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        personal_information: plainToInstance(ResponsePersonalInformationDto,personal_information, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByUserLastName(lastname:string){
    try{
      const { user } = await this.usersService.findByLastName(lastname)
      const usersId = user.map(u => u.id_user)
      const personal_information = await this.perInfRepository.find({where:{id_user:In(usersId)},relations:['user']})
      if(personal_information.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro de este usuario con informacion personal o usuario inexistente'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        personal_information:plainToInstance(ResponsePersonalInformationDto,personal_information,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async create(createPersonalInformationDto:CreatePersonalInformationDto){
    try{
      const existsUser = await this.usersService.findOneById(createPersonalInformationDto.id_user)
      const {id_user} = createPersonalInformationDto
      const existsPersonalInformation = await this.perInfRepository.findOneBy({id_user})
      if(existsPersonalInformation) throw new BadRequestException({status:'Error',mensaje:'Ya existe informacion personal creada por parte de este usuario'})
      const personal_information = await this.perInfRepository.save(createPersonalInformationDto)
      return{
        status:'Success',
        mensaje:'Informacion personal creada con exito',
        personal_information:plainToInstance(ResponsePersonalInformationDto,personal_information)
      }
    }catch(error){
      throw error
    }
  }

  async update(id_per_inf:number, updatePersonalInformationDto:UpdatePersonalInformationDto){
    try{
      const existsPersonalInformation = await this.existsById(id_per_inf)
      if(!existsPersonalInformation) throw new NotFoundException({status:'Error',mensaje:'No existe este registro de informacion personal'})
      if(updatePersonalInformationDto.id_user && updatePersonalInformationDto.id_user !== existsPersonalInformation.id_user) throw new BadRequestException({status:'Error',mensaje:'No se puede cambiar el id de usuario'})
      const personal_information = this.perInfRepository.merge(existsPersonalInformation,updatePersonalInformationDto)
      await this.perInfRepository.save(personal_information)
      return{
        status:'Success',
        mensaje:'Informacion personal actualizada con exito',
        personal_information:plainToInstance(ResponsePersonalInformationDto,personal_information, {excludeExtraneousValues:true})
      }
      }catch(error){
      throw error
    }
  }

  async delete(id_per_inf:number){
    try{
      const personal_information = await this.existsById(id_per_inf)
      if(!personal_information) throw new NotFoundException({status:'Error',mensaje:'No existe este registro de informacion personal'})
      await this.perInfRepository.remove(personal_information)
      return{
        status:'Success',
        mensaje:'Informacion personal eliminada con exito'
      }
    }catch(error){
      throw error
    }
  }

}
