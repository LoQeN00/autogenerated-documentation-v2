import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppHelloWorlApi, TestApi, UsersApi } from './app.documentation';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  @TestApi()
  getTest() {
    return 'test';
  }
}
