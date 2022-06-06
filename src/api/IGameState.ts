import TurnPhase from "../api/phases/TurnPhase"
import Zones from "./zones/Zones"
import GamePhase from "./GamePhase"
import ICard from "./cards/ICard"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  data: IGameStateData
}

export interface IPlayer {
  deck: IDeck,
  hand: IHand,
  name?: string
}

export interface IHand {
  playerId: string,
  cards: ICard[]
}

export interface IDeck {
  playerId: string,
  cards: ICard[]
}

export interface IPlayers {
  /** 
   * raw player array
   */
  players: IPlayer[]

  /**
   * Which player was selected as the starting player
   */
  startingPlayer: IPlayer | undefined

  /**
   * playerId for the current player
   */
  currentTurnsPlayerId: string

  /**
   * Useful for getting the hands of all players
   */
  hands: IHand[]

  /**
   * Useful for getting the decks of all players
   */
  decks: IDeck[]
}

export interface IGameStateData {
  gamePhase?: GamePhase,
  turnPhase?: TurnPhase,
  playerData?: IPlayers,
  zones?: Zones,
}

export default IGameState
