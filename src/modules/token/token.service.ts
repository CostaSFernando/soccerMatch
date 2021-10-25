import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Token } from './interfaces/token.interface';

@Injectable()
export class TokenService {
  constructor(
    @Inject('TOKEN_MODEL')
    private tokenModel: Model<Token>,
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

}
