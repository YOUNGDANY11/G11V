import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ResponsePlayerDto } from './dto/response/response-player.dto';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de jugadores obtenida exitosamente',
    type: [ResponsePlayerDto],
  })
  @Get()
  findAll(){
    return this.playersService.findAll()
  }

  @ApiOperation({ summary: 'Obtener un jugador por ID' })
  @ApiParam({ name: 'id', description: 'ID del jugador', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugador encontrado exitosamente',
    type: ResponsePlayerDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Jugador no encontrado'
  })
  @Get('id/:id')
  findOne(@Param('id',ParseIntPipe)id_player:number){
    return this.playersService.findOneById(id_player)
  }

  @ApiOperation({ summary: 'Buscar jugadores por nombre de usuario' })
  @ApiQuery({ name: 'name', description: 'Nombre del usuario', example: 'Juan' })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugadores encontrados exitosamente',
    type: [ResponsePlayerDto],
  })
  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.playersService.findByUserName(name)
  }

  @ApiOperation({ summary: 'Buscar jugadores por apellido de usuario' })
  @ApiQuery({ name: 'lastname', description: 'Apellido del usuario', example: 'Pérez' })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugadores encontrados exitosamente',
    type: [ResponsePlayerDto],
  })
  @Get('user/lastname')
  findByUserLastName(@Query('lastname') lastname:string){
    return this.playersService.findByUserLastName(lastname)
  }

  @ApiOperation({ summary: 'Crear un nuevo jugador' })
  @ApiResponse({ 
    status: 201, 
    description: 'Jugador creado exitosamente',
    type: ResponsePlayerDto,
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos inválidos'
  })
  @Post()
  create(@Body() createPlayerDto:CreatePlayerDto){
    return this.playersService.create(createPlayerDto)
  }

  @ApiOperation({ summary: 'Actualizar información de un jugador' })
  @ApiParam({ name: 'id', description: 'ID del jugador', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugador actualizado exitosamente',
    type: ResponsePlayerDto,
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Jugador no encontrado'
  })
  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_player:number, @Body() updatePlayerDto:UpdatePlayerDto){
    return this.playersService.update(id_player,updatePlayerDto)
  }

  @ApiOperation({ summary: 'Eliminar un jugador' })
  @ApiParam({ name: 'id', description: 'ID del jugador', example: 1 })
  @ApiResponse({ 
    status: 200, 
    description: 'Jugador eliminado exitosamente'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Jugador no encontrado'
  })
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_player:number){
    return this.playersService.delete(id_player)
  }
}
