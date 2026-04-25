import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ResponseUserDto } from './dto/response/response-user.dto';
import {
  ApiGetAllUsers,
  ApiGetUserById,
  ApiGetUserByName,
  ApiGetUserByLastName,
  ApiGetUserByEmail,
  ApiGetUserByDocument,
  ApiCreateUser,
  ApiUpdateUser,
  ApiDeleteUser
} from './decorators/swagger-users.decorator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiGetAllUsers()
  @Get()
  findAll(){
    return this.usersService.findAll()  
  }

  @ApiGetUserById()
  @Get('id/:id')
  findById(@Param('id',ParseIntPipe) id_user:number){
    return this.usersService.findOneById(id_user)
  }

  @ApiGetUserByName()
  @Get('name')
  findByName(@Query('name') name:string){
    return this.usersService.findByName(name)
  }

  @ApiGetUserByLastName()
  @Get('lastname')
  findByLastName(@Query('lastname') lastname:string){
    return this.usersService.findByLastName(lastname)
  }

  @ApiGetUserByEmail()
  @Get('email')
  findByEmail(@Query('email')email:string){
    return this.usersService.findByEmail(email)
  }

  @ApiGetUserByDocument()
  @Get('document')
  findByDocument(@Query('document') document:string){
    return this.usersService.findByDocument(document)
  }

  @ApiCreateUser()
  @Post()
  create(@Body() createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  @ApiUpdateUser()
  @Put('id/:id')
  update(@Param('id', ParseIntPipe) id_user:number, @Body() updateUserDto:UpdateUserDto){
    return this.usersService.update(id_user, updateUserDto)
  }

  @ApiDeleteUser()
  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_user:number){
    return this.usersService.delete(id_user)
  }
}
