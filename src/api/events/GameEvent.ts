
import IGameState from "../../state/IGameState"
import { GameEvents, NoticeEvent } from "./GameEvents"

/**
 * Modifies game state by taking the current state
 * and returning new modifications to make
 */
interface GameEvent {
  readonly name: NoticeEvent

  /**
   * Returns the diff to add
   * 
   * @param gameState 
   */
  apply(gameState: IGameState): void
}

export default GameEvent
