import { IGameStateData } from "../IGameState"
import { GameEvents } from "./GameEvents"

/**
 * Modifies game state by taking the current state
 * and returning new modifications to make
 */
interface GameEvent {
  name: GameEvents

  /**
   * Returns the diff to add
   * 
   * @param gameState 
   */
  apply(gameState: IGameStateData): Partial<IGameStateData>
}

export default GameEvent
