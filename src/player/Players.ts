import selectRandomPlayer from "../actions/SelectRandomPlayer"
import Player from "../player"
import Hands from "./Hands";
import CardTranslator from "../cards/CardTranslator";

class Players {
  startingPlayer: Player
  static instance: Players

  constructor(
    private readonly players: Player[]
  ) {
    this.startingPlayer = selectRandomPlayer(players)

    Players.instance = this
  }

  static getInstance(): Players {
    if (!Players.instance) {
      throw new Error("Not initialized")
    }

    return Players.instance
  }

  hands(): Hands {
    const decks = this.players.map(p => p.deck)
    const cards = CardTranslator.getInstance().lookupDecks(decks)
    return new Hands(cards)
  }
}

export default Players
