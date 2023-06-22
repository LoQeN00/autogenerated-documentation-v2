import { UserDto } from './dtos/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetUserByIdApi, UsersApi } from './app.documentation';
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
  @UsersApi()
  createUser(@Body() userDto: UserDto) {
    const newUser = {
      ...userDto,
      id: 1,
    };

    return newUser;
  }
}
