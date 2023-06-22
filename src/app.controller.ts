import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppHelloWorlApi, TestApi, UsersApi } from './app.documentation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Demo')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @AppHelloWorlApi()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  @UsersApi()
  getUsers() {
    return 'users';
  }

  @Get('/test')
  @TestApi()
  getTest() {
    return 'test';
  }
}
