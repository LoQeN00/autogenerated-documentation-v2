import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppHelloWorlApi, TestApi } from './app.documentation';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @AppHelloWorlApi()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  @TestApi()
  getASD(): string {
    return 'test';
  }
}
