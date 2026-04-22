import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from './entities/doctor.entity';
import { In, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ResponseDoctorDto } from './dto/response/response-doctor.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor) private doctorRepository:Repository<Doctor>,
    private readonly usersService:UsersService
  ){}

  async findAll(){
    try{
      const doctors = await this.doctorRepository.find({relations:['user']})
      if(doctors.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No hay doctores registrados'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        doctor: plainToInstance(ResponseDoctorDto,doctors,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findOneById(id_doctor:number){
    try{
      const doctor = await this.doctorRepository.findOne({where:{id_doctor},relations:['user']})
      if(!doctor) throw new NotFoundException({status:'Error',mensaje:'No existe este doctor'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        doctor: plainToInstance(ResponseDoctorDto,doctor,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByUserName(name:string){
    try{
      const {user} = await this.usersService.findByName(name)
      const usersId = user.map(u => u.id_user)
      const doctors = await this.doctorRepository.find({where:{id_user:In(usersId)}})
      if(doctors.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe ningun doctor con este nombre'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        doctors: plainToInstance(ResponseDoctorDto,doctors,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByUserLastName(lastname:string){
    try{
      const {user} = await this.usersService.findByLastName(lastname)
      const usersId = user.map(u => u.id_user)
      const doctors = await this.doctorRepository.find({where:{id_user:In(usersId)}})
      if(doctors.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe ningun doctor con este apellido'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        doctors: plainToInstance(ResponseDoctorDto,doctors,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByUserDocument(document:string){
    try{
      const {user} = await this.usersService.findByDocument(document)
      const usersId = user.map(u => u.id_user)
      const doctors = await this.doctorRepository.find({where:{id_user:In(usersId)}})
      if(doctors.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe ningun doctor con este documento'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        doctors: plainToInstance(ResponseDoctorDto,doctors,{excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async create(createDoctorDto:CreateDoctorDto){
    try{
      const {id_user} = createDoctorDto
      const existsUser = await this.usersService.findOneById(id_user)
      const existsDoctor = await this.doctorRepository.findOneBy({id_user})
      if(existsDoctor) throw new BadRequestException({status:'Error',mensaje:'Ya existe este doctor'})
      const doctor = await this.doctorRepository.save(createDoctorDto)
      return {
        status:'Success',
        mensaje:'Doctor creado con exito',
        doctor: plainToInstance(ResponseDoctorDto,doctor)
      }
    }catch(error){
      throw error
    }
  }

  async update(id_doctor:number, updateDoctorDto:UpdateDoctorDto){
    try{
      const existsDoctor = await this.doctorRepository.findOneBy({id_doctor})
      if(!existsDoctor) throw new NotFoundException({status:'Error',mensaje:'No existe este doctor'})
      if(updateDoctorDto.id_user && updateDoctorDto.id_user !== existsDoctor.id_user) throw new BadRequestException({status:'Error',mensaje:'No se puede cambiar el id del usuario'})
      const doctor = await this.doctorRepository.merge(existsDoctor,updateDoctorDto)
      await this.doctorRepository.save(doctor)
      return{
        status:'Success',
        mensaje:'Doctor actualizado con exito',
        doctor: plainToInstance(ResponseDoctorDto,doctor)
      }
    }catch(error){
      throw error
    }
  }

  async delete(id_doctor:number){
    try{
      const existsDoctor = await this.doctorRepository.findOneBy({id_doctor})
      if(!existsDoctor) throw new NotFoundException({status:'Error',mensaje:'No existe este doctor'})
      const doctor = await this.doctorRepository.remove(existsDoctor)
      return{
        status:'Success',
        mensaje:'Doctor eliminado con exito'
      }
    }catch(error){
      throw error
    }
  }
}
