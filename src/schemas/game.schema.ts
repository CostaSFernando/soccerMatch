import * as mongoose from 'mongoose';
import { PlayerSchema } from './player.schema';
import { Player } from '../player/interfaces/player.interface' 

export const GameSchema = new mongoose.Schema({
  name: String,
  dateGame: Number,
  players: [{name: String, goals: Number}]
});
