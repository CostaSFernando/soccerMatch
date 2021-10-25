import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { tokenProviders } from './token.providers';
import { DatabaseModule } from '../../database/database.module';
import { AuthModule } from '../auth/auth.module';
import { PlayerModule } from '../player/player.module';
import { TokenController } from './token.controller';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), PlayerModule],
  controllers: [
    TokenController
  ],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
  exports: [TokenService]
})
export class TokenModule {}
