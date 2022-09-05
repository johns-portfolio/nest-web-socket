import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './events/chat.gateway';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
