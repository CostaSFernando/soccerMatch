import { forwardRef, Module } from '@nestjs/common';
// import { CatsController } from './cats.controller';
import { PlayersService } from './player.service';
import { playersProviders } from './player.providers';
import { DatabaseModule } from '../../database/database.module';
import { PlayerController } from './player.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [
    PlayerController
  ],
  providers: [
    PlayersService,
    ...playersProviders,
  ],
  exports: [PlayersService]
})
export class PlayerModule {}
