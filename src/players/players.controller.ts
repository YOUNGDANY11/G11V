import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll(){
    return this.playersService.findAll()
  }

  @Get('id/:id')
  findOne(@Param('id',ParseIntPipe)id_player:number){
    return this.playersService.findOneById(id_player)
  }

  @Get('user/name')
  findByUserName(@Query('name') name:string){
    return this.playersService.findByUserName(name)
  }

  @Get('user/lastname')
  findByUserLastName(@Query('lastname') lastname:string){
    return this.playersService.findByUserLastName(lastname)
  }

  @Post()
  create(@Body() createPlayerDto:CreatePlayerDto){
    return this.playersService.create(createPlayerDto)
  }

  @Put('id/:id')
  update(@Param('id',ParseIntPipe) id_player:number, @Body() updatePlayerDto:UpdatePlayerDto){
    return this.playersService.update(id_player,updatePlayerDto)
  }

  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_player:number){
    return this.playersService.delete(id_player)
  }
}
