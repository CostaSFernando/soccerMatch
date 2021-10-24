import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreatePlayerDto } from './dto/createPlayer.dto';
import { Player } from './interfaces/player.interface';
import { resultCreateDto } from 'src/dto/resultCreate.dto';

@Injectable()
export class PlayersService {
  constructor(
    @Inject('PLAYER_MODEL')
    private playerModel: Model<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<resultCreateDto> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    createdPlayer.save();
    return <resultCreateDto>{
      result: true,
      message: 'successfully created player'
    }
  }

  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }
  
  async findById(id: string): Promise<Player> {
    return this.playerModel.findById(id).exec();
  }
}