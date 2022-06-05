import { IPlayer } from "../api/IGameState"
import Player from "../api/players/Player"

const selectRandomPlayer = (players: IPlayer[]): IPlayer => {
  const random = Math.floor(Math.random() * players.length)
  const player = players[random]

  return player
}

export default selectRandomPlayer
