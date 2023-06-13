import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PhaseEvents, TurnEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

class StartDrawPhase implements GameAction {
  name = PhaseActions.StartDraw

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(PhaseEvents.DrawStarted)

    gameState.commit({
      phase: PhaseEvents.DrawStarted
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PhaseEvent,
      {
        name: PhaseEvents.PhaseChanged,
        payload: {
          phase: PhaseEvents.DrawStarted
        }
      })
  }
}

export default StartDrawPhase
