import { GameActions } from "../../../actions/ActionNames";
import IGameState from "../../../state/IGameState";
import { GameEvents } from "../../events";
import EventTracker from "../../events/EventTracker";
import { EventTypes } from "../../events/GameEvents";
import GamePhase from "../../phases/GamePhase";
import GameAction from "../GameAction";

class EndGame implements GameAction {
  name = GameActions.EndGame

  apply(gameState: IGameState): void {
    gameState.commit({
      status: GamePhase.Ended
    }, this.name.toString())

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.GameEvent,
      {
        name: GameEvents.GameEnded,
        payload: {}
      })
  }
}

export default EndGame
