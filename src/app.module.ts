import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoBotModule } from './auto-bot/auto-bot.module';

@Module({
  imports: [AutoBotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
