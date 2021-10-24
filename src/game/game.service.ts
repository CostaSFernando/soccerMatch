import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateGameDto } from './dto/createGame.dto';
import { Game } from './interfaces/game.interface';

@Injectable()
export class GameService {
  constructor(
    @Inject('GAME_MODEL')
    private playerModel: Model<Game>,
  ) {}

  async create(createPlayerDto: CreateGameDto): Promise<Game> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    return createdPlayer.save();
  }

  async findAll(): Promise<Game[]> {
    return this.playerModel.find().exec();
  }
}