import { Injectable } from '@nestjs/common';
import { PlayersService } from '../player/player.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly playerService: PlayersService, private jwtService: JwtService) {}

    async validatePlayer(email: string, passwordCompare: string): Promise<any> {
        const player = await this.playerService.findOne(email);
        if (player && bcrypt.compareSync(passwordCompare, player.password)) {
            const { password, ...result } = player;
            return result;
        }
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }

}
