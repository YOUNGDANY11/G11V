import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { CreateRoleDto, UpdateRoleDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository:Repository<Role>
  ){}

  async findAll(){
    try{
      const roles = await this.roleRepository.find()
      if(roles.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No hay roles registrados'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        roles
      }
    }catch(error){
      throw error
    }
  }

  async findOneById(id_role:number){
    try{
      const role = await this.roleRepository.findOneById(id_role)
      if(!role) throw new NotFoundException({status:'Error',mensaje:'No existe este rol'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        role
      }
    }catch(error){
      throw error
    }
  }

  async findByName(name:string){
    try{
      const role = await this.roleRepository.find({where:{name:ILike(`%${name}%`)}})
      if(role.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No existe este rol'})
      return{
        status:'Success',
        mensaje:'Consulta exitosa',
        role
      }
    }catch(error){
      throw error
    }
  }

  async findByCode(code:string){
    try{
      const role = await this.roleRepository.findOneBy({code})
      if(!role) throw new NotFoundException({status:'Error',mensaje:'No existe este rol'})
      return {
        status:'Success',
        mensaje:'Consulta exitosa',
        role
      }
    }catch(error){
      throw error
    }
  }

  async create(createRoleDto:CreateRoleDto){
    try{
      const { code } = createRoleDto
      const existsRole = await this.roleRepository.findOneBy({code})
      if(existsRole) throw new BadRequestException({status:'Error',mensaje:'Ya existe un rol con este codigo'})
      const role = await this.roleRepository.save(createRoleDto)
      return {
        status:'Success',
        mensaje:'Rol creado con exito',
        role
      }
    }catch(error){
      throw error
    }
  }

  async update(id_role:number,updateRoleDto:UpdateRoleDto){
    try{
      const { code } = updateRoleDto
      const existsRole = await this.findOneById(id_role)
      if(updateRoleDto.code && updateRoleDto.code !== existsRole.role.code){
        const existsRoleByCode = await this.roleRepository.findOneBy({code})
        if(existsRoleByCode) throw new BadRequestException({status:'Error', mensaje:'Ya existe un rol con este codigo'})
      }

      const role = await this.roleRepository.merge(existsRole.role,updateRoleDto)
      await this.roleRepository.save(role)
      return{
        status:'Succes',
        mensaje:'Rol actualizado con exito',
        role
      }
    }catch(error){
      throw error
    }
  }

  async delete(id_role:number){
    try{
      const role = await this.findOneById(id_role)
      await this.roleRepository.remove(role.role)
      return{
        status:'Success',
        mensaje:'Rol eliminado con exito'
      }
    }catch(error){
      throw error
    }
  }
}
