import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PhaseEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

class EndUpkeep implements GameAction {
  name = PhaseActions.EndUpkeep

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(PhaseEvents.UpkeepEnded)

    gameState.commit({
      phase: PhaseEvents.UpkeepEnded
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PhaseEvent,
      {
        name: PhaseEvents.PhaseChanged,
        payload: {
          phase: PhaseEvents.UpkeepEnded
        }
      })
  }
}

export default EndUpkeep
