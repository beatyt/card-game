import { GameActions } from "../../../actions/ActionNames"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, GameEvents } from "../../events/GameEvents"
import GamePhase from "../../phases/GamePhase"
import { TurnPhase } from "../../phases/TurnPhase"
import GameAction from "../GameAction"

class StartGame implements GameAction {
  name = GameActions.StartGame

  apply(gameState: IGameState): void {
    gameState.commit({
      status: GamePhase.Started,
      turnPhase: TurnPhase.TurnStart
    }, this.name.toString())

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.GameEvent,
      {
        name: GameEvents.GameStarted,
        payload: {}
      })
  }
}

export default StartGame
