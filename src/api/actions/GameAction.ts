
import { Actions } from "../../actions/ActionNames"
import IGameState from "../../state/IGameState"

/**
 * Modifies game state by taking the current state
 * and returning new modifications to make
 */
interface GameAction {
  readonly name: Actions

  /**
   * Returns the diff to add
   * 
   * @param gameState 
   */
  apply(gameState: IGameState): void
}

export default GameAction
