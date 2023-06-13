import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PhaseEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

class EndMainPhase implements GameAction {
  name = PhaseActions.EndMain

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(PhaseEvents.MainEnded)

    gameState.commit({
      phase: PhaseEvents.MainEnded
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PhaseEvent,
      {
        name: PhaseEvents.PhaseChanged,
        payload: {
          phase: PhaseEvents.MainEnded
        }
      })
  }
}

export default EndMainPhase
