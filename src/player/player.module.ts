import { Module } from '@nestjs/common';
// import { CatsController } from './cats.controller';
import { PlayersService } from './player.service';
import { playersProviders } from './player.providers';
import { DatabaseModule } from '../database/database.module';
import { PlayerController } from './player.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    PlayerController
  ],
  providers: [
    PlayersService,
    ...playersProviders,
  ],
})
export class PlayerModule {}
