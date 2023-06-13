import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PhaseEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

class StartMainPhase implements GameAction {
  name = PhaseActions.StartMain

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(PhaseEvents.MainStarted)

    gameState.commit({
      phase: PhaseEvents.MainStarted
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PhaseEvent,
      {
        name: PhaseEvents.PhaseChanged,
        payload: {
          phase: PhaseEvents.MainStarted
        }
      })
  }
}

export default StartMainPhase
