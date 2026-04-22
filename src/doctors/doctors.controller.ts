import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get()
  findAll(){
    return this.doctorsService.findAll()
  }

  @Get('id/:id')
  findOneById(@Param('id',ParseIntPipe)id_doctor:number){
    return this.doctorsService.findOneById(id_doctor)
  }

  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.doctorsService.findByUserName(name)
  }

  @Get('user/lastname')
  findByUserLastname(@Query('lastname')lastname:string){
    return this.doctorsService.findByUserLastName(lastname)
  }

  @Get('user/document')
  findByUserDocument(@Query('document') document:string){
    return this.doctorsService.findByUserDocument(document)
  }

  @Post()
  create(@Body() createDoctorDto:CreateDoctorDto){
    return this.doctorsService.create(createDoctorDto)
  }

  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_doctor:number, @Body() updateDoctorDto:UpdateDoctorDto){
    return this.doctorsService.update(id_doctor,updateDoctorDto)
  }

  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_doctor:number){
    return this.doctorsService.delete(id_doctor)
  }
}
