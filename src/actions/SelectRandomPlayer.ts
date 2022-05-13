import Player from "src/player"

const selectRandomPlayer = (players: Player[]): any => {
  return players[Math.random() * players.length]
}

export default selectRandomPlayer
