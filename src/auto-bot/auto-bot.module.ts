import { Module } from '@nestjs/common';
import { AutoBotController } from './auto-bot.controller';
import { AutoBotService } from './auto-bot.service';

@Module({
  controllers: [AutoBotController],
  providers: [AutoBotService]
})
export class AutoBotModule {}
