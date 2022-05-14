import selectRandomPlayer from "../actions/SelectRandomPlayer"
import Player from "@/player"
import Hands from "./Hands";

class Players {
  startingPlayer: Player

  constructor(
    players: Player[]
  ) {
    this.startingPlayer = selectRandomPlayer(players)
  }

  hands(): Hands {
    return new Hands()
  }
}

export default Players
