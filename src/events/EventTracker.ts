import { GameContext } from '../game'
import GameState from '../game/GameState'
import EventEmitter from 'events'
import GameEvent from './GameEvent'
import IEventTracker from './IEventTracker'

/**
 * Tracks every event for the game to allow resets and rollbacks
 */
class EventTracker implements IEventTracker {
  eventStack: GameEvent[] = []
  emitter = new EventEmitter()
  gameStates: GameState[] = []

  dispatch(event: GameEvent) {
    // snapshots the current state
    const currentState = GameContext.game.gameState
    this.gameStates.push({ ...currentState })

    // applies the new state
    this.eventStack.push(event)
    const newState = event.apply(currentState)
    this.emitter.emit(event.name)

    // should i snapshot the new state, or wait for next snapshot call?
    this.gameStates.push({ ...newState })
  }

  undoLast(): void {
    this.eventStack.pop()
    this.gameStates.pop()

    const lastState = this.gameStates[this.gameStates.length - 1]

    GameContext.game.gameState = lastState
  }

  resetGame(): void {
    throw new Error('Method not implemented.')
  }
  
  resetTurn(): void {
    throw new Error('Method not implemented.')
  }
}

export default EventTracker
