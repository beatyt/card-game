import Player from "player/Player"

const selectRandomPlayer = (players: Player[]): Player => {
  const random = Math.floor(Math.random() * players.length)
  const player = players[random]

  return player
}

export default selectRandomPlayer
