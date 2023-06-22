import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersApi } from './app.documentation';
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
}
