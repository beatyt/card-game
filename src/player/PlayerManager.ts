import selectRandomPlayer from "@/actions/SelectRandomPlayer"
import Player from "@/player"

class PlayerManager {
  startingPlayer: Player

  constructor(
    players: Player[]
  ) {
    this.startingPlayer = new Proxy(selectRandomPlayer(players), {})
  }
}
