import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { resultCreateDto } from 'src/dto/resultCreate.dto';
import { CreatePlayerDto } from './dto/createPlayer.dto';
import { paramPlayerDto } from './dto/paramPlayer.dto';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayersService) {}

  @Get('all')
  async getAllPlayers(): Promise<Player[]> {
    return this.playerService.findAll();
  }

  @Get(':id')
  async getPlayer(@Param() params: paramPlayerDto): Promise<Player> {
    return this.playerService.findById(params.id);
  }

  @Post()
  async createPlayer(@Body() data: CreatePlayerDto): Promise<resultCreateDto> {
    return this.playerService.create(data);
  }
}
