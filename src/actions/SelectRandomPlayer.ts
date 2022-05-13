import Player from "@/player"

const selectRandomPlayer = (players: Player[]): any => {
  return players[Math.random() * players.length]
}

export default selectRandomPlayer
