import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import GameAction from "../GameAction"

class ProgressPhase implements GameAction {
  name = PhaseActions.ProgressPhase

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().progress();
  }
}

export default ProgressPhase
