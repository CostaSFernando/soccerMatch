import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PlayerModule } from '../player/player.module';
import { TokenModule } from '../token/token.module';
import { TokenService } from '../token/token.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PlayerModule,
    PassportModule,
    TokenModule,
    JwtModule.register({
      secret: process.env.SECRETJWT,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [JwtModule, AuthService],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
