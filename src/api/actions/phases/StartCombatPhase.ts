import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PhaseEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

class StartCombatPhase implements GameAction {
  name = PhaseActions.StartCombat

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(PhaseEvents.CombatStarted)

    gameState.commit({
      phase: PhaseEvents.CombatStarted
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PhaseEvent,
      {
        name: PhaseEvents.PhaseChanged,
        payload: {
          phase: PhaseEvents.CombatStarted
        }
      })
  }
}

export default StartCombatPhase
