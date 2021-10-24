import { Module } from '@nestjs/common';
// import { CatsController } from './cats.controller';
import { GameService } from './game.service';
import { gameProviders } from './game.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [
    // CatsController
  ],
  providers: [
    GameService,
    ...gameProviders,
  ],
})
export class GameModule {}
