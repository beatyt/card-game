import GameEvent from "./GameEvent";

interface IEventTracker {
  dispatch(event: GameEvent): void

  undoLast(): void

  resetGame(): void

  resetTurn(): void
}

export default IEventTracker
