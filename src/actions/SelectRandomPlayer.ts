import Player from "@/player"

const selectRandomPlayer = (players: Player[]): Player => {
  return players[Math.random() * players.length]
}

export default selectRandomPlayer
