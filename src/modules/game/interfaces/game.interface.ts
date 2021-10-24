import { Player } from "src/modules/player/interfaces/player.interface";

export interface Game {
    name: string,
    dateGame: Date,
    Players: Player[]
}