import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { PersonalInformationsService } from './personal_informations.service';
import { CreatePersonalInformationDto, UpdatePersonalInformationDto } from './dto';
import { ResponsePersonalInformationDto } from './dto/response/response-personal_information.dto';

@ApiTags('Personal Informations')
@Controller('personal-informations')
export class PersonalInformationsController {
  constructor(private readonly personalInformationsService: PersonalInformationsService) {}

  @ApiOperation({ summary: 'Obtener toda la información personal registrada' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de información personal obtenida exitosamente',
    type: [ResponsePersonalInformationDto],
  })
  @Get()
  findAll(){
    return this.personalInformationsService.findAll()
  }

  @ApiOperation({ summary: 'Obtener información personal por ID' })
  @ApiParam({ name: 'id', description: 'ID de la información personal', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Información personal encontrada exitosamente',
    type: ResponsePersonalInformationDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Información personal no encontrada'
  })
  @Get('id/:id')
  findById(@Param('id',ParseIntPipe) id_per_inf:number){
    return this.personalInformationsService.findOneById(id_per_inf)
  }

  @ApiOperation({ summary: 'Buscar información personal por nombre de usuario' })
  @ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Juan' })
  @ApiResponse({ 
    status: 200, 
    description: 'Información personal encontrada exitosamente',
    type: [ResponsePersonalInformationDto],
  })
  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.personalInformationsService.findByUserName(name)
  }

  @ApiOperation({ summary: 'Buscar información personal por apellido de usuario' })
  @ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Pérez' })
  @ApiResponse({ 
    status: 200, 
    description: 'Información personal encontrada exitosamente',
    type: [ResponsePersonalInformationDto],
  })
  @Get('user/lastname')
  findByLastname(@Query('lastname') lastname:string){
    return this.personalInformationsService.findByUserLastName(lastname)
  }

  @ApiOperation({ summary: 'Crear nueva información personal' })
  @ApiResponse({ 
    status: 201, 
    description: 'Información personal creada exitosamente',
    type: ResponsePersonalInformationDto,
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos inválidos'
  })
  @Post()
  create(@Body() createPersonalInformationDto:CreatePersonalInformationDto){
    return this.personalInformationsService.create(createPersonalInformationDto)
  }

  @ApiOperation({ summary: 'Actualizar información personal existente' })
  @ApiParam({ name: 'id', description: 'ID de la información personal', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Información personal actualizada exitosamente',
    type: ResponsePersonalInformationDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Información personal no encontrada'
  })
  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_per_inf:number,@Body() updatePersonalInformationDto:UpdatePersonalInformationDto){
    return this.personalInformationsService.update(id_per_inf,updatePersonalInformationDto)
  }

  @ApiOperation({ summary: 'Eliminar información personal' })
  @ApiParam({ name: 'id', description: 'ID de la información personal', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Información personal eliminada exitosamente'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Información personal no encontrada'
  })
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_per_inf:number){
    return this.personalInformationsService.delete(id_per_inf)
  }
}
