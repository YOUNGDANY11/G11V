import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ResponsePlayerDto } from './dto/response/response-player.dto';
import {
  ApiGetAllPlayers,
  ApiGetPlayerById,
  ApiGetPlayerByName,
  ApiGetPlayerByLastName,
  ApiGetPlayerByDocument,
  ApiCreatePlayer,
  ApiUpdatePlayer,
  ApiDeletePlayer
} from './decorators/swagger-players.decorator';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @ApiGetAllPlayers()
  @Get()
  findAll(){
    return this.playersService.findAll()
  }

  @ApiGetPlayerById()
  @Get('id/:id')
  findOne(@Param('id',ParseIntPipe)id_player:number){
    return this.playersService.findOneById(id_player)
  }

  @ApiGetPlayerByName()
  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.playersService.findByUserName(name)
  }

  @ApiGetPlayerByLastName()
  @Get('user/lastname')
  findByUserLastName(@Query('lastname') lastname:string){
    return this.playersService.findByUserLastName(lastname)
  }

  @ApiGetPlayerByDocument()
  @Get('user/document')
  findByUserDocument(@Query('document') document:string){
    return this.playersService.findByUserDocument(document)
  }

  @ApiCreatePlayer()
  @Post()
  create(@Body() createPlayerDto:CreatePlayerDto){
    return this.playersService.create(createPlayerDto)
  }

  @ApiUpdatePlayer()
  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_player:number, @Body() updatePlayerDto:UpdatePlayerDto){
    return this.playersService.update(id_player,updatePlayerDto)
  }

  @ApiDeletePlayer()
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_player:number){
    return this.playersService.delete(id_player)
  }
}
