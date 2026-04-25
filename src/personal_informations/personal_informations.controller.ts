import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PersonalInformationsService } from './personal_informations.service';
import { CreatePersonalInformationDto, UpdatePersonalInformationDto } from './dto';
import { ResponsePersonalInformationDto } from './dto/response/response-personal_information.dto';
import {
  ApiGetAllPersonalInformations,
  ApiGetPersonalInformationById,
  ApiGetPersonalInformationByUserName,
  ApiGetPersonalInformationByUserLastName,
  ApiCreatePersonalInformation,
  ApiUpdatePersonalInformation,
  ApiDeletePersonalInformation
} from './decorators/swagger-personal-informations.decorator';

@ApiTags('Personal Informations')
@Controller('personal-informations')
export class PersonalInformationsController {
  constructor(private readonly personalInformationsService: PersonalInformationsService) {}

  @ApiGetAllPersonalInformations()
  @Get()
  findAll(){
    return this.personalInformationsService.findAll()
  }

  @ApiGetPersonalInformationById()
  @Get('id/:id')
  findById(@Param('id',ParseIntPipe) id_per_inf:number){
    return this.personalInformationsService.findOneById(id_per_inf)
  }

  @ApiGetPersonalInformationByUserName()
  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.personalInformationsService.findByUserName(name)
  }

  @ApiGetPersonalInformationByUserLastName()
  @Get('user/lastname')
  findByLastname(@Query('lastname') lastname:string){
    return this.personalInformationsService.findByUserLastName(lastname)
  }

  @ApiCreatePersonalInformation()
  @Post()
  create(@Body() createPersonalInformationDto:CreatePersonalInformationDto){
    return this.personalInformationsService.create(createPersonalInformationDto)
  }

  @ApiUpdatePersonalInformation()
  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_per_inf:number,@Body() updatePersonalInformationDto:UpdatePersonalInformationDto){
    return this.personalInformationsService.update(id_per_inf,updatePersonalInformationDto)
  }

  @ApiDeletePersonalInformation()
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_per_inf:number){
    return this.personalInformationsService.delete(id_per_inf)
  }
}
