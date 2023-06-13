import { Actions } from "../../actions/ActionNames";
import IGameState from "../../state/IGameState";

export interface GameAction {
  name: Actions

  /**
 * Returns the diff to add
 * 
 * @param gameState 
 */
  apply(gameState: IGameState): void
}
