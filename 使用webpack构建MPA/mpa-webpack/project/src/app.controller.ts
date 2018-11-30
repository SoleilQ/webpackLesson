import { Get, Render, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index.html')
  root(): object {
    return { message: this.appService.root() };
  }
}
