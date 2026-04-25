import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto, UpdateRoleDto } from './dto';
import { ResponseRoleDto } from './dto/response/response-role.dto';
import {
  ApiGetAllRoles,
  ApiGetRoleById,
  ApiGetRoleByCode,
  ApiGetRoleByName,
  ApiCreateRole,
  ApiUpdateRole,
  ApiDeleteRole
} from './decorators/swagger-roles.decorator';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiGetAllRoles()
  @Get()
  findAll(){
    return this.rolesService.findAll()
  }

  @ApiGetRoleById()
  @Get('id/:id')
  findOneById(@Param('id',ParseIntPipe) id_role:number){
    return this.rolesService.findOneById(id_role)
  }

  @ApiGetRoleByCode()
  @Get('code')
  findByCode(@Query('code') code:string){
    return this.rolesService.findByCode(code)
  }

  @ApiGetRoleByName()
  @Get('name')
  findByName(@Query('name') name:string){
    return this.rolesService.findByName(name)
  }

  @ApiCreateRole()
  @Post()
  create(@Body() createRoleDto:CreateRoleDto){
    return this.rolesService.create(createRoleDto)
  }

  @ApiUpdateRole()
  @Put('id/:id')
  update(@Param('id', ParseIntPipe) id_role:number, @Body() updateRoleDto:UpdateRoleDto){
    return this.rolesService.update(id_role,updateRoleDto)
  }

  @ApiDeleteRole()
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_role:number){
    return this.rolesService.delete(id_role)
  }
}
