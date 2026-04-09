import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { PersonalInformationsService } from './personal_informations.service';
import { CreatePersonalInformationDto, UpdatePersonalInformationDto } from './dto';

@Controller('personal-informations')
export class PersonalInformationsController {
  constructor(private readonly personalInformationsService: PersonalInformationsService) {}

  @Get()
  findAll(){
    return this.personalInformationsService.findAll()
  }

  @Get('id/:id')
  findById(@Param('id',ParseIntPipe) id_per_inf:number){
    return this.personalInformationsService.findOneById(id_per_inf)
  }

  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.personalInformationsService.findByUserName(name)
  }

  @Get('user/lastname')
  findByLastname(@Query('lastname') lastname:string){
    return this.personalInformationsService.findByUserLastName(lastname)
  }

  @Post()
  create(@Body() createPersonalInformationDto:CreatePersonalInformationDto){
    return this.personalInformationsService.create(createPersonalInformationDto)
  }

  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_per_inf:number,@Body() updatePersonalInformationDto:UpdatePersonalInformationDto){
    return this.personalInformationsService.update(id_per_inf,updatePersonalInformationDto)
  }

  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_per_inf:number){
    return this.personalInformationsService.delete(id_per_inf)
  }
}
