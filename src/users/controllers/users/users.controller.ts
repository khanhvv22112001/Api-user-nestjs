import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UpdateUserDto } from '../../dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query("type") type?: "CLIENT" | "CMS") {
    return this.usersService.findAll(type);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto)
    }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
