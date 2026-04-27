import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { MedicalRecord } from './entities/medical_record.entity';
import { plainToInstance } from 'class-transformer';
import { ResponseMedicalRecod } from './dto/response/response-medical_record.dto';
import { DoctorsService } from 'src/doctors/doctors.service';
import { PlayersService } from 'src/players/players.service';
import { CreateMedicalRecordDto } from './dto/create-medical_record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical_record.dto';

@Injectable()
export class MedicalRecordsService {
  constructor(
    @InjectRepository(MedicalRecord) private medicalRecordRepository: Repository<MedicalRecord>,
    private readonly doctorsService:DoctorsService,
    private readonly playersService:PlayersService
  ){}
  

  async findAll(){
    try{
      const medical_records = await this.medicalRecordRepository.find({relations:['player.user','doctor.user']})
      if(medical_records.length === 0) throw new NotFoundException({status:'Error',mensaje:'No existen registros medicos'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod,medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findOneById(id_medical_record:number){
    try{
      const medical_record = await this.medicalRecordRepository.findOne({where:{id_medical_record}, relations:['player.user','doctor.user']})
      if(!medical_record) throw new NotFoundException({status:'Error',mensaje:'No existe este registro medico'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_record: plainToInstance(ResponseMedicalRecod,medical_record, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByPlayerName(name:string){
    try{
      const existsPlayer = await this.playersService.findByUserName(name)
      const playersId = existsPlayer.player.map(p => p.id_player)
      const medical_records = await this.medicalRecordRepository.find({where:{id_player:In(playersId)}, relations:['player.user','doctor.user']})
      if(medical_records.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro medico de este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod, medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByPlayerLastName(lastname:string){
    try{
      const existsPlayer = await this.playersService.findByUserLastName(lastname)
      const playersId = existsPlayer.player.map(p => p.id_player)
      const medical_records = await this.medicalRecordRepository.find({where:{id_player:In(playersId)}, relations:['player.user','doctor.user']})
      if(medical_records.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro medico de este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod, medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByPlayerDocument(document:string){
    try{
      const existsPlayer = await this.playersService.findByUserDocument(document)
      const playersId = existsPlayer.player.map(p => p.id_player)
      const medical_records = await this.medicalRecordRepository.find({where:{id_player:In(playersId)}, relations:['player.user','doctor.user']})
      if(medical_records.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro medico de este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod, medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByDoctorName(name:string){
    try{
      const existsPlayer = await this.doctorsService.findByUserName(name)
      const doctorsId = existsPlayer.doctors.map(p => p.id_doctor)
      const medical_records = await this.medicalRecordRepository.find({where:{id_doctor:In(doctorsId)}, relations:['player.user','doctor.user']})
      if(medical_records.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro medico realizado por este doctor'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod, medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByDoctorLastName(lastname:string){
    try{
      const existsPlayer = await this.doctorsService.findByUserLastName(lastname)
      const doctorsId = existsPlayer.doctors.map(p => p.id_doctor)
      const medical_records = await this.medicalRecordRepository.find({where:{id_doctor:In(doctorsId)}, relations:['player.user','doctor.user']})
      if(medical_records.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro medico realizado por este doctor'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod, medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByDoctorDocument(document:string){
    try{
      const existsPlayer = await this.doctorsService.findByUserDocument(document)
      const doctorsId = existsPlayer.doctors.map(p => p.id_doctor)
      const medical_records = await this.medicalRecordRepository.find({where:{id_doctor:In(doctorsId)}, relations:['player.user','doctor.user']})
      if(medical_records.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe registro medico realizado por este doctor'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        medical_records: plainToInstance(ResponseMedicalRecod, medical_records, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async create(createMedicalRecordDto:CreateMedicalRecordDto){
    try{
      const existsPlayer = await this.playersService.findOneById(createMedicalRecordDto.id_player)
      const existsDoctor = await this.doctorsService.findOneById(createMedicalRecordDto.id_doctor)
      const medical_record = await this.medicalRecordRepository.save(createMedicalRecordDto)
      return {
        status:'Success',
        mensaje:'Registro medico creado con exito',
        medical_record
      }
    }catch(error){
      throw error
    }
  }
  
  async update(id_medical_record:number, updateMedicalRecordDto:UpdateMedicalRecordDto){
    try{
      const existsMedicalRecord = await this.medicalRecordRepository.findOneBy({id_medical_record})
      if(!existsMedicalRecord) throw new NotFoundException({status:'Error',mensaje:'No existe este registro medico'})
      if(updateMedicalRecordDto.id_doctor && updateMedicalRecordDto.id_doctor !== existsMedicalRecord.id_doctor) throw new BadRequestException({status:'Error',mensaje:'No se puede cambiar el id del doctor'})
      if(updateMedicalRecordDto.id_player && updateMedicalRecordDto.id_player !== existsMedicalRecord.id_player) throw new BadRequestException({status:'Error',mensaje:'No se puede cambiar el id del deportista'})
      const medical_record = await this.medicalRecordRepository.merge(existsMedicalRecord, updateMedicalRecordDto)
      await this.medicalRecordRepository.save(medical_record)
      return {
        status:'Success',
        mensaje:'Registro medico actualizado con exito',
        medical_record
      }
    }catch(error){
      throw error
    }
  }

  async delete(id_medical_record:number){
    try{
      const existsMedicalRecord = await this.medicalRecordRepository.findOneBy({id_medical_record})
      if(!existsMedicalRecord) throw new NotFoundException({status:'Error',mensaje:'No existe este registro medico'})
      await this.medicalRecordRepository.remove(existsMedicalRecord)
      return{
        status:'Success',
        mensaje:'Registro medico eliminado con exito'
      }
    }catch(error){
      throw error
    }
  }
}
