import { PhaseActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PhaseEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

class EndCombatPhase implements GameAction {
  name = PhaseActions.EndCombat

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(PhaseEvents.CombatEnded)

    gameState.commit({
      phase: PhaseEvents.CombatEnded
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PhaseEvent,
      {
        name: PhaseEvents.PhaseChanged,
        payload: {
          phase: PhaseEvents.CombatEnded
        }
      })

  }
}

export default EndCombatPhase
