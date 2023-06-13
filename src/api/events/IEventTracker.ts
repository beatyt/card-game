import GameAction from "../actions/GameAction";
import { EventTypes } from "./GameEvents";
import { NotificationEvent } from "./repository";

interface IEventTracker {
  dispatchStateModifyingEvent(event: GameAction): void

  dispatchNotifyingEvent(type: EventTypes, event: NotificationEvent): void

  undoLast(): void

  resetGame(): void

  resetTurn(): void
}

export default IEventTracker
