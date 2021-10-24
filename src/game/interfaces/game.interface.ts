import { Player } from "src/player/interfaces/player.interface";

export interface Game {
    name: string,
    dateGame: Date,
    Players: Player[]
}