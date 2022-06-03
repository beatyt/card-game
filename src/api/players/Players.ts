import selectRandomPlayer from "../../actions/SelectRandomPlayer"
import Hands from "./Hands";
import CardTranslator from "../../game/cards/CardTranslator";
import Player from "./Player";
import { PlayerInitializer } from "./PlayerInitializer";
import Deck from "../decks/Deck";
import Decks from "./Decks";
import Hand from "../decks/Hand";

/**
 * Offers convenience methods for accessing the state of the players
 * 
 * If you need to access an individual player's hand, do something else
 */
class Players {
  startingPlayer?: Player

  static instance: Players

  players: Player[] | undefined
  hands: Hands | undefined
  decks: Decks | undefined

  private constructor() { }

  static getInstance(): Players {
    if (!Players.instance) {
      Players.instance = new Players()
    }

    return Players.instance
  }

  init(playerInitializers: PlayerInitializer[]) {
    this.players = playerInitializers.map(p => {
      const deck = CardTranslator.getInstance().lookupCards(p.deck)
      return new Player(new Deck(deck), new Hand())
    })

    this.hands = new Hands(this.players.map(p => p.hand))
    this.decks = new Decks(this.players.map(p => p.deck))

    this.startingPlayer = selectRandomPlayer(this.players)
  }
}

export default Players
