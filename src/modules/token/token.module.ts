import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { tokenProviders } from './token.providers';
import { DatabaseModule } from '../../database/database.module';
import { AuthModule } from '../auth/auth.module';
import { PlayerModule } from '../player/player.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), PlayerModule],
  controllers: [
  ],
  providers: [
    ...tokenProviders,
    TokenService,
  ],
  exports: [TokenService]
})
export class TokenModule {}
