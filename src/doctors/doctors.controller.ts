import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateDoctorDto, ResponseDoctorDto, UpdateDoctorDto } from './dto';
import {
  ApiGetAllDoctors,
  ApiGetDoctorById,
  ApiGetDoctorByName,
  ApiGetDoctorByLastName,
  ApiGetDoctorByDocument,
  ApiCreateDoctor,
  ApiUpdateDoctor,
  ApiDeleteDoctor
} from './decorators/swagger-doctors.decorator';

@ApiTags('Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @ApiGetAllDoctors()
  @Get()
  findAll(){
    return this.doctorsService.findAll()
  }

  @ApiGetDoctorById()
  @Get('id/:id')
  findOneById(@Param('id',ParseIntPipe)id_doctor:number){
    return this.doctorsService.findOneById(id_doctor)
  }

  @ApiGetDoctorByName()
  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.doctorsService.findByUserName(name)
  }

  @ApiGetDoctorByLastName()
  @Get('user/lastname')
  findByUserLastname(@Query('lastname')lastname:string){
    return this.doctorsService.findByUserLastName(lastname)
  }

  @ApiGetDoctorByDocument()
  @Get('user/document')
  findByUserDocument(@Query('document') document:string){
    return this.doctorsService.findByUserDocument(document)
  }

  @ApiCreateDoctor()
  @Post()
  create(@Body() createDoctorDto:CreateDoctorDto){
    return this.doctorsService.create(createDoctorDto)
  }

  @ApiUpdateDoctor()
  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_doctor:number, @Body() updateDoctorDto:UpdateDoctorDto){
    return this.doctorsService.update(id_doctor,updateDoctorDto)
  }

  @ApiDeleteDoctor()
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_doctor:number){
    return this.doctorsService.delete(id_doctor)
  }
}
