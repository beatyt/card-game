import { PlayerInitializer } from "../../api/players/PlayerInitializer";
import CardTranslator from "../cards/CardTranslator";
import ICard from "../cards/ICard";
import ManaValue from "../cards/ManaValue";
import Decks from "./decks/Decks";
import IDeck from "./decks/IDeck";
import IHand from "./hands";
import Hands from "./hands/Hands";
import Player from "./Player";

export interface IPlayer {
  playerId: string
  deck: IDeck
  hand: IHand
  name?: string
  
  /**
   * After a land is used to provide mana
   */
  floatingMana: ManaValue[]

  drawCards(num: number): any
  shuffleDeck(): { playerId: string, cards: ICard[] };
}

/**
 * Convenice methods for all players
 */
export interface IPlayers {
  /** 
   * raw player array
   */
  players?: IPlayer[]

  /**
   * Which player was selected as the starting player
   */
  startingPlayer?: IPlayer | undefined

  /**
   * playerId for the current player
   */
  currentTurnsPlayerId?: string

  /**
   * Useful for getting the hands of all players
   */
  hands?: Hands

  /**
   * Useful for getting the decks of all players
   */
  Decks?: Decks
}


/**
 * Offers convenience methods for accessing the state of the players
 * 
 * If you need to access an individual player's hand, do something else
 */
class Players implements IPlayers {

  static instance: Players

  private constructor() { }

  players: IPlayer[] = []
  startingPlayer: IPlayer | undefined
  hands!: Hands
  Decks!: Decks
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

    this.hands = new Hands(this.players.map(p => p.hand))
    this.Decks = new Decks(this.players.map(p => p.deck))

    return this
  }

  select(playerId: string): IPlayer {
    const player = this.players.find(p => p.playerId === playerId)

    if (!player)
      throw new Error(`No such player ${playerId}`)

    return player
  }

  selectRandomPlayer = (): IPlayer => {
    const random = Math.floor(Math.random() * this.players.length)
    const player = this.players[random]

    return player
  }

  removePlayer(playerId: string) {
    this.players = this.players.filter(p => p.playerId !== playerId)
  }

  drawCards(num: number) {
    return this.players.map(p => ({
      playerId: p.playerId,
      cards: p.drawCards(num)
    }))
  }
}

export default Players
