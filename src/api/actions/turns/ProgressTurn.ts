import { TurnActions } from "../../../actions/ActionNames"
import { TurnOrder } from "../../../game/turns"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, TurnEvents } from "../../events/GameEvents"
import { TurnPhase } from "../../phases/TurnPhase"
import GameAction from "../GameAction"

class ProgressTurn implements GameAction {
  name = TurnActions.ProgressTurn

  apply(gameState: IGameState): void {
    gameState.commit({

    }, this.name.toString())

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

export default ProgressTurn
