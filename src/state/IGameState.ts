import { PhaseEvents } from "../api/events/GameEvents"
import GamePhase from "../api/phases/GamePhase"
import { TurnPhase } from "../api/phases/TurnPhase"

import Zones from "../game/board/zones/Zones"
import { IPlayer, IPlayers } from "../game/players"
import { TurnOrderStrategy } from "../types/turns"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  readonly data: IGameStateData

  /**
   * Saves the data provided
   * 
   * @param delta 
   * @param tag A name to describe the state change
   */
  commit(delta: Partial<IGameStateData>, tag?: string): void

  /**
   * Undoes the last action that was saved
   */
  rollback(): void
}

export interface IGameStateData {
  status?: GamePhase,
  turnPhase?: TurnPhase,
  phase?: PhaseEvents,
  playerData?: IPlayers,
  cardData?: any[],
  zones?: Zones,

  randomlySelectedPlayer?: unknown | IPlayer
  turnOrder?: {
    order: string[]
    strategy?: TurnOrderStrategy
  }
}

export default IGameState
