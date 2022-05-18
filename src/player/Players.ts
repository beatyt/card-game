import selectRandomPlayer from "../actions/SelectRandomPlayer"
import Hands from "./Hands";
import CardTranslator from "../cards/CardTranslator";
import Player from "../player/Player";
import { PlayerInitializer } from "./PlayerInitializer";
import Deck from "../deck/Deck";

/**
 * Offers convenience methods for accessing the state of the players
 */
class Players {
  startingPlayer?: Player
  static instance: Players
  readonly players: Player[]

  constructor(
    readonly playerInitializers: PlayerInitializer[]
  ) {
    this.players = playerInitializers.map(p => {
      const deck = CardTranslator.getInstance().lookupCards(p.deck)
      return new Player(new Deck(deck), [])
    })

    this.startingPlayer = selectRandomPlayer(this.players)

    Players.instance = this
  }

  static getInstance(): Players {
    if (!Players.instance) {
      throw new Error("Not initialized")
    }

    return Players.instance
  }

  hands(): Hands {
    const hands = this.players.map(p => p.hand)
    return new Hands(hands)
  }
}

export default Players
