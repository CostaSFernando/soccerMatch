import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { resultCreateDto } from 'src/dto/resultCreate.dto';
import { AuthService } from '../auth/auth.service';
import { requestLoginPlayer } from './dto/authPlayer.dto';
import { CreatePlayerDto } from './dto/createPlayer.dto';
import { paramPlayerDto } from './dto/paramPlayer.dto';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayersService, 
    private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('all')
  async getAllPlayers(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  async getPlayer(@Param() params: paramPlayerDto): Promise<Player> {
    return this.playerService.findById(params.id);
  }

  // @Post()
  // async loginPlayer(@Body() data: requestLoginPlayer): Promise<requestLoginPlayer> {

  // }

  @Post()
  async createPlayer(@Body() data: CreatePlayerDto): Promise<resultCreateDto> {
    return this.playerService.create(data);
  }

}
