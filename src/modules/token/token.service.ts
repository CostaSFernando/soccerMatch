import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus, forwardRef } from '@nestjs/common';
import { Token } from './interfaces/token.interface';
import { PlayersService } from '../player/player.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_MODEL')
    private tokenModel: Model<Token>,
    private playerService: PlayersService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async save(token: string, email: string) {
    const oldToken = await this.tokenModel.findOne({email});
    if ( oldToken ) {
      await oldToken.updateOne({hash: token});
      oldToken.save();
    } else {
      const newToken = new this.tokenModel({hash: token, email});
      newToken.save()
    }
  }
  async refreshToken(hash: string) {
    const oldToken = await this.tokenModel.findOne({hash});
    if (oldToken) {
      const user = await this.playerService.findOne(oldToken.email);
      return await this.authService.login(user);
    } else {
      return new HttpException({
        errorMessage: 'Token inválido!'
      }, HttpStatus.UNAUTHORIZED);
    }
  }

}
