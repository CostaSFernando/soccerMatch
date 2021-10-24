import { Injectable } from '@nestjs/common';
import { PlayersService } from '../player/player.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly playerService: PlayersService) {}

    async validatePlayer(email: string, passwordCompare: string): Promise<any> {
        const player = await this.playerService.findOne(email);
        if (player && bcrypt.compareSync(passwordCompare, player.password)) {
            const { password, ...result } = player;
            return result;
        }
    }

}
