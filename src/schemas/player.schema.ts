import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
  name: String,
  birthday: Date,
  position: String,
  goals: Number,
  password: String,
  email: String
});
