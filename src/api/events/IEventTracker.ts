import GameEvent from "./GameEvent";

interface IEventTracker {
  dispatchStateModifyingEvent(event: GameEvent): void

  undoLast(): void

  resetGame(): void

  resetTurn(): void
}

export default IEventTracker
