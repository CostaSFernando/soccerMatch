import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './modules/game/game.module';
import { PlayerModule } from './modules/player/player.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    GameModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
