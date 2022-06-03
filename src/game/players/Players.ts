import selectRandomPlayer from "../../actions/SelectRandomPlayer"
import Hands from "../../player/Hands";
import CardTranslator from "../cards/CardTranslator";
import Player from "../../player/Player";
import { PlayerInitializer } from "../../player/PlayerInitializer";
import Deck from "../../deck/Deck";
import Decks from "../../player/Decks";

/**
 * Offers convenience methods for accessing the state of the players
 * 
 * If you need to access an individual player's hand, do something else
 */
class Players {
  startingPlayer?: Player

  static instance: Players

  readonly players: Player[]
  readonly hands: Hands
  readonly decks: Decks

  constructor(
    readonly playerInitializers: PlayerInitializer[]
  ) {
    this.players = playerInitializers.map(p => {
      const deck = CardTranslator.getInstance().lookupCards(p.deck)
      return new Player(new Deck(deck), [])
    })

    this.hands = new Hands(this.players.map(p => p.hand))
    this.decks = new Decks(this.players.map(p => p.deck))

    this.startingPlayer = selectRandomPlayer(this.players)

    Players.instance = this
  }

  static getInstance(): Players {
    if (!Players.instance) {
      throw new Error("Not initialized")
    }

    return Players.instance
  }
}

export default Players
