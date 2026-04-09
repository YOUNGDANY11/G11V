import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto, UpdateRoleDto } from './dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  findAll(){
    return this.rolesService.findAll()
  }

  @Get('id/:id')
  findOneById(@Param('id',ParseIntPipe) id_role:number){
    return this.rolesService.findOneById(id_role)
  }

  @Get('code')
  findByCode(@Query('code') code:string){
    return this.rolesService.findByCode(code)
  }

  @Get('name')
  findByName(@Query('name') name:string){
    return this.rolesService.findByName(name)
  }

  @Post()
  create(@Body() createRoleDto:CreateRoleDto){
    return this.rolesService.create(createRoleDto)
  }

  @Put('id/:id')
  update(@Param('id', ParseIntPipe) id_role:number, @Body() updateRoleDto:UpdateRoleDto){
    return this.rolesService.update(id_role,updateRoleDto)
  }

  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_role:number){
    return this.rolesService.delete(id_role)
  }
}
