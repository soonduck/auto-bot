import { Controller, Get } from '@nestjs/common';
import { AutoBotService } from './auto-bot.service';

@Controller('auto-bot')
export class AutoBotController {
  constructor(private readonly autoBotService: AutoBotService) {}
  @Get('/log')
  async getLog() {
    console.log(this.autoBotService.getLog());
    return this.autoBotService.getLog();
  }
}
