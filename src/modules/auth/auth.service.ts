import { Injectable } from '@nestjs/common';
import { PlayersService } from '../player/player.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly playerService: PlayersService,
        private jwtService: JwtService,
        private tokenService: TokenService
    ) {}

    async validatePlayer(email: string, passwordCompare: string): Promise<any> {
        const player = await this.playerService.findOne(email);
        if (player && bcrypt.compareSync(passwordCompare, player.password)) {
            const { password, ...result } = player;
            return result;
        }
    }
    async login(user: any) {
        user = user._doc;
        const payload = { username: user.email, sub: user._id };
        const access_token = this.jwtService.sign(payload);
        this.tokenService.save(access_token, user.email);
        return {
          access_token
        };
    }

}
