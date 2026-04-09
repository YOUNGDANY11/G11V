import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(){
    return this.usersService.findAll()  
  }

  @Get('id/:id')
  findById(@Param('id',ParseIntPipe) id_user:number){
    return this.usersService.findOneById(id_user)
  }

  @Get('name')
  findByName(@Query('name') name:string){
    return this.usersService.findByName(name)
  }

  @Get('lastname')
  findByLastName(@Query('lastname') lastname:string){
    return this.usersService.findByLastName(lastname)
  }

  @Get('email')
  findByEmail(@Query('email')email:string){
    return this.usersService.findByEmail(email)
  }

  @Get('document')
  findByDocument(@Query('document') document:string){
    return this.usersService.findByDocument(document)
  }

  @Post()
  create(@Body() createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto)
  }

  @Put('id/:id')
  update(@Param('id', ParseIntPipe) id_user:number, @Body() updateUserDto:UpdateUserDto){
    return this.usersService.update(id_user, updateUserDto)
  }

  @Delete('id/:id')
  delete(@Param('id',ParseIntPipe) id_user:number){
    return this.usersService.delete(id_user)
  }
}
