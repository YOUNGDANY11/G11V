import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ResponseUserDto } from './dto/response/response-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de usuarios obtenida exitosamente',
    type: [ResponseUserDto],
  })
  @Get()
  findAll(){
    return this.usersService.findAll()  
  }

  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario encontrado exitosamente',
    type: ResponseUserDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuario no encontrado'
  })
  @Get('id/:id')
  findById(@Param('id',ParseIntPipe) id_user:number){
    return this.usersService.findOneById(id_user)
  }

  @ApiOperation({ summary: 'Buscar un usuario por nombre' })
  @ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Juan' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario encontrado exitosamente',
    type: [ResponseUserDto],
  })
  @Get('name')
  findByName(@Query('name') name:string){
    return this.usersService.findByName(name)
  }

  @ApiOperation({ summary: 'Buscar un usuario por apellido' })
  @ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Pérez' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario encontrado exitosamente',
    type: [ResponseUserDto],
  })
  @Get('lastname')
  findByLastName(@Query('lastname') lastname:string){
    return this.usersService.findByLastName(lastname)
  }

  @ApiOperation({ summary: 'Buscar un usuario por correo electrónico' })
  @ApiQuery({ name: 'email', description: 'Correo del usuario', example: 'juan@example.com' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario encontrado exitosamente',
    type: ResponseUserDto,
  })
  @Get('email')
  findByEmail(@Query('email')email:string){
    return this.usersService.findByEmail(email)
  }

  @ApiOperation({ summary: 'Buscar un usuario por número de documento' })
  @ApiQuery({ name: 'document', description: 'Número de documento', example: '1234567' })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario encontrado exitosamente',
    type: ResponseUserDto,
  })
  @Get('document')
  findByDocument(@Query('document') document:string){
    return this.usersService.findByDocument(document)
  }

  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario creado exitosamente',
    type: ResponseUserDto,
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos inválidos'
  })
  @Post()
  create(@Body() createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  @ApiOperation({ summary: 'Actualizar un usuario existente' })
  @ApiParam({ name: 'id', description: 'ID del usuario', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario actualizado exitosamente',
    type: ResponseUserDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuario no encontrado'
  })
  @Put('id/:id')
  update(@Param('id', ParseIntPipe) id_user:number, @Body() updateUserDto:UpdateUserDto){
    return this.usersService.update(id_user, updateUserDto)
  }

  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Usuario eliminado exitosamente'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Usuario no encontrado'
  })
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_user:number){
    return this.usersService.delete(id_user)
  }
}
