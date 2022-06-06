import selectRandomPlayer from "../../actions/SelectRandomPlayer";
import CardTranslator from "../../game/cards/CardTranslator";
import Deck from "../decks/Deck";
import Hand from "../decks/Hand";
import { IPlayers } from "../IGameState";
import Player from "./Player";
import { PlayerInitializer } from "./PlayerInitializer";

/**
 * Offers convenience methods for accessing the state of the players
 * 
 * If you need to access an individual player's hand, do something else
 */
class Players implements IPlayers {
  static instance: Players

  private constructor() { }

  players: Player[] = []
  startingPlayer: Player | undefined
  hands: Hand[] = []
  decks: Deck[] = []
  currentTurnsPlayerId!: string;

  static getInstance(): Players {
    if (!Players.instance) {
      Players.instance = new Players()
    }

    return Players.instance
  }

  init(playerInitializers: PlayerInitializer[]) {
    this.players = playerInitializers.map(p => {
      const deck = CardTranslator.getInstance().lookupCards(p.deck.cardUris)
      return new Player(p.playerId, deck)
    })

    this.hands = this.players.map(p => p.hand)
    this.decks = this.players.map(p => p.deck)

    this.startingPlayer = selectRandomPlayer(this.players)
    
    this.currentTurnsPlayerId = this.startingPlayer.playerId
  }

  drawCards(num: number) {
    this.players.forEach(p => p.drawCards(num))
  }
}

export default Players
