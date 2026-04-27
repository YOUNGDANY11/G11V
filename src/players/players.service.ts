import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { In, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ResponsePlayerDto } from './dto/response/response-player.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playerRepository:Repository<Player>,
    private readonly usersService: UsersService
  ){}



  async findAll(){
    try{
      const players = await this.playerRepository.find({relations:['user']})
      if(players.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No hay deportistas registrados'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        players: plainToInstance(ResponsePlayerDto,players, { excludeExtraneousValues: true })
      }
    }catch(error){
      throw error
    }
  }

  async findOneById(id_player){
    try{
      const player = await this.playerRepository.findOne({where:{id_player}, relations:['user']})
      if(!player) throw new NotFoundException({status:'Error',mensaje:'No existe este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        player:plainToInstance(ResponsePlayerDto,player, { excludeExtraneousValues:true })
      }
    }catch(error) {
      throw error
    }
  }

  async findByUserName(name:string){
    try{
      const { user } = await this.usersService.findByName(name)
      const usersId = user.map(u => u.id_user)
      const players = await this.playerRepository.find({where:{id_user:In(usersId)},relations:['user']})
      if(players.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        player: plainToInstance(ResponsePlayerDto,players, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByUserLastName(lastname:string){
    try{
      const { user } = await this.usersService.findByLastName(lastname)
      const usersId = user.map(u => u.id_user)
      const players = await this.playerRepository.find({where:{id_user:In(usersId)},relations:['user']})
      if(players.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        player: plainToInstance(ResponsePlayerDto,players, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async findByUserDocument(document:string){
    try{
      const {user} = await this.usersService.findByDocument(document)
      const usersId = user.map(u => u.id_user)
      const players = await this.playerRepository.find({where:{id_user:In(usersId)},relations:['user']})
      if(players.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe este deportista'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        player: plainToInstance(ResponsePlayerDto,players, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async create(createPlayerDto:CreatePlayerDto){
    try{
      const { id_user } =createPlayerDto
      const existsUser = await this.usersService.findOneById(id_user)
      const existsPlayer = await this.playerRepository.findOneBy({id_user})
      if(existsPlayer) throw new BadRequestException({status:'Error',mensaje:'Este deportista ya esta registrado'})
      const player = await this.playerRepository.save(createPlayerDto)
      return {
        status:'Success',
        mensaje:'Deportista creado con exito',
        player: plainToInstance(ResponsePlayerDto,player)
      }
    }catch(error){
      throw error
    }
  }

  async update(id_player:number, updatePlayerDto:UpdatePlayerDto){
    try{
      const existsPlayer = await this.playerRepository.findOneBy({id_player})
      if(!existsPlayer) throw new NotFoundException({status:'Error',mensaje:'No existe este deportista'})
      if(updatePlayerDto.id_user && updatePlayerDto.id_user !== existsPlayer.id_user) throw new BadRequestException({status:'Error',mensaje:'No se puede cambiar el id del usuario'})
      const player = await this.playerRepository.merge(existsPlayer,updatePlayerDto)
      await this.playerRepository.save(player)
      return {
        status:'Success',
        mensaje:'Deportista actualizado con exito',
        player: plainToInstance(ResponsePlayerDto, player, {excludeExtraneousValues:true})
      }
    }catch(error){
      throw error
    }
  }

  async delete(id_player:number){
    try{
      const existsPlayer = await this.playerRepository.findOneBy({id_player})
      if(!existsPlayer) throw new NotFoundException({status:'Error',mensaje:'No existe este deportista'})
      const player = await this.playerRepository.remove(existsPlayer)
      return {
        status:'Success',
        mensaje:'Deportista eliminado con exito'
      }
    }catch(error){
      throw error
    }
  }

}
