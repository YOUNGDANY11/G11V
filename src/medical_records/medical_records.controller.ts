import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MedicalRecordsService } from './medical_records.service';
import { CreateMedicalRecordDto } from './dto/create-medical_record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical_record.dto';
import {
  ApiGetAllMedicalRecords,
  ApiGetMedicalRecordById,
  ApiGetMedicalRecordByPlayerName,
  ApiGetMedicalRecordByPlayerLastName,
  ApiGetMedicalRecordByPlayerDocument,
  ApiGetMedicalRecordByDoctorName,
  ApiGetMedicalRecordByDoctorLastName,
  ApiGetMedicalRecordByDoctorDocument,
  ApiCreateMedicalRecord,
  ApiUpdateMedicalRecord,
  ApiDeleteMedicalRecord
} from './decorators/swagger-medical_records.decorator';

@ApiTags('Medical Records')
@Controller('medical-records')
export class MedicalRecordsController {
  constructor(private readonly medicalRecordsService: MedicalRecordsService) {}

  @ApiGetAllMedicalRecords()
  @Get()
  findAll(){
    return this.medicalRecordsService.findAll()
  }
  
  @ApiGetMedicalRecordById()
  @Get('id/:id')
  findOneById(@Param('id',ParseIntPipe) id_medical_record:number){
    return this.medicalRecordsService.findOneById(id_medical_record)
  }

  @ApiGetMedicalRecordByPlayerName()
  @Get('player/name')
  findByPlayerName(@Query('name') name:string){
    return this.medicalRecordsService.findByPlayerName(name)
  }

  @ApiGetMedicalRecordByPlayerLastName()
  @Get('player/lastname')
  findByPlayerLastName(@Query('lastname') lastname:string){
    return this.medicalRecordsService.findByPlayerLastName(lastname)
  }

  @ApiGetMedicalRecordByPlayerDocument()
  @Get('player/document')
  findByPlayerDocument(@Query('document') document:string){
    return this.medicalRecordsService.findByPlayerDocument(document)
  }

  @ApiGetMedicalRecordByDoctorName()
  @Get('doctor/name')
  findByDoctorName(@Query('name') name:string){
    return this.medicalRecordsService.findByDoctorName(name)
  }

  @ApiGetMedicalRecordByDoctorLastName()
  @Get('doctor/lastname')
  findByDoctorLastName(@Query('lastname') lastname:string){
    return this.medicalRecordsService.findByDoctorLastName(lastname)
  }

  @ApiGetMedicalRecordByDoctorDocument()
  @Get('doctor/document')
  findByDoctorDocument(@Query('document') document:string){
    return this.medicalRecordsService.findByDoctorDocument(document)
  }

  @ApiCreateMedicalRecord()
  @Post()
  create(@Body() createMedicalRecordDto:CreateMedicalRecordDto){
    return this.medicalRecordsService.create(createMedicalRecordDto)
  }

  @ApiUpdateMedicalRecord()
  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_medical_record:number,@Body() updateMedicalRecordDto:UpdateMedicalRecordDto){
    return this.medicalRecordsService.update(id_medical_record,updateMedicalRecordDto)
  }

  @ApiDeleteMedicalRecord()
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_medical_record:number){
    return this.medicalRecordsService.delete(id_medical_record)
  }
}
