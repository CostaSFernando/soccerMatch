import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PlayerModule } from '../player/player.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PlayerModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRETJWT,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [JwtModule, AuthService],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
