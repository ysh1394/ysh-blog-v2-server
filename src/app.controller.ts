import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hi');
    return this.appService.getHello();
  }

  @Get('/search') // Get이 동적 Get보다 밑에 있으면 /:id 중 하나로 읽으므로 위에서 선언해 줄 것
  async search() {
    return {
      test: '1',
      id: 123,
    };
  }
}
