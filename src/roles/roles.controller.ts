import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { ResponseRoleDto } from './dto/response/response-role.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: 'Obtener todos los roles' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de roles obtenida exitosamente',
    type: [ResponseRoleDto],
  })
  @Get()
  findAll(){
    return this.rolesService.findAll()
  }

  @ApiOperation({ summary: 'Obtener un rol por ID' })
  @ApiParam({ name: 'id', description: 'ID del rol', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Rol encontrado exitosamente',
    type: ResponseRoleDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Rol no encontrado'
  })
  @Get('id/:id')
  findOneById(@Param('id',ParseIntPipe) id_role:number){
    return this.rolesService.findOneById(id_role)
  }

  @ApiOperation({ summary: 'Buscar un rol por código' })
  @ApiQuery({ name: 'code', description: 'Código del rol', example: 'ADMIN' })
  @ApiResponse({ 
    status: 200, 
    description: 'Rol encontrado exitosamente',
    type: ResponseRoleDto,
  })
  @Get('code')
  findByCode(@Query('code') code:string){
    return this.rolesService.findByCode(code)
  }

  @ApiOperation({ summary: 'Buscar un rol por nombre' })
  @ApiQuery({ name: 'name', description: 'Nombre del rol', example: 'Administrador' })
  @ApiResponse({ 
    status: 200, 
    description: 'Rol encontrado exitosamente',
    type: ResponseRoleDto,
  })
  @Get('name')
  findByName(@Query('name') name:string){
    return this.rolesService.findByName(name)
  }

  @ApiOperation({ summary: 'Crear un nuevo rol' })
  @ApiResponse({ 
    status: 201, 
    description: 'Rol creado exitosamente',
    type: ResponseRoleDto,
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos inválidos'
  })
  @Post()
  create(@Body() createRoleDto:CreateRoleDto){
    return this.rolesService.create(createRoleDto)
  }

  @ApiOperation({ summary: 'Actualizar un rol existente' })
  @ApiParam({ name: 'id', description: 'ID del rol', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Rol actualizado exitosamente',
    type: ResponseRoleDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Rol no encontrado'
  })
  @Put('id/:id')
  update(@Param('id', ParseIntPipe) id_role:number, @Body() updateRoleDto:UpdateRoleDto){
    return this.rolesService.update(id_role,updateRoleDto)
  }

  @ApiOperation({ summary: 'Eliminar un rol' })
  @ApiParam({ name: 'id', description: 'ID del rol', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Rol eliminado exitosamente'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Rol no encontrado'
  })
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_role:number){
    return this.rolesService.delete(id_role)
  }
}
