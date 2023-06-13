import { TurnActions } from "../../../actions/ActionNames"
import PhaseOrder from "../../../game/phases/PhaseOrder"
import { TurnOrder } from "../../../game/turns"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, TurnEvents } from "../../events/GameEvents"
import { TurnPhase } from "../../phases/TurnPhase"
import GameAction from "../GameAction"

class StartTurn implements GameAction {
  name = TurnActions.StartTurn

  apply(gameState: IGameState): void {
    PhaseOrder.getInstance().setCurrent(TurnPhase.TurnStart)

    gameState.commit({
      turnPhase: TurnPhase.TurnStart,
      playerData: {
        currentTurnsPlayerId: TurnOrder.getInstance().currentPlayer()
      }
    }, this.name)

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.TurnEvent,
      {
        name: TurnEvents.TurnChanged,
        payload: {
          turn: TurnPhase.TurnStart,
          currentTurnsPlayerId: TurnOrder.getInstance().currentPlayer()
        }
      })
  }
}

export default StartTurn
