import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PlayerModule } from '../player/player.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PlayerModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
