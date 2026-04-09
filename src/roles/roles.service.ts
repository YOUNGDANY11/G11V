import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { NotFoundError } from 'rxjs';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository:Repository<Role>
  ){}

  async findAll(){
    try{ 
      const roles = await this.roleRepository.find()
      if(roles.length === 0 ) throw new NotFoundException({status:'Error',mensaje:'No hay roles registrados'})
    }catch(error){
      throw error
    }
  }
}
