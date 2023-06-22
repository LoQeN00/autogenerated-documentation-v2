import { UserDto } from './dtos/create-user.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateUserApi,
  GetUserByIdApi,
  UpdateUserApi,
  UsersApi,
} from './app.documentation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  @UsersApi()
  getUsers() {
    return 'users';
  }

  @Get('/users/:id')
  @GetUserByIdApi()
  getUser() {
    return 'user';
  }

  @Post('/users')
  @CreateUserApi()
  createUser(@Body() userDto: UserDto) {
    const newUser = {
      ...userDto,
      id: 1,
    };

    return newUser;
  }

  @Put('/users/:id')
  @UpdateUserApi()
  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return 'user';
  }
}
