import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    PlayerModule,
    GameModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
