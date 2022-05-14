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

  constructor(
    private readonly listeners?: { event: string, callback: (...args: any[]) => void }[]
  ) {
    listeners?.forEach(listener => {
      this.emitter.addListener(listener.event, listener.callback)
    })
  }

  dispatch(event: GameEvent) {
    // snapshots the current state
    const currentState = GameContext.game.gameState
    // this.gameStates.push({ ...currentState })

    // applies the new state
    this.eventStack.push(event)
    const newState = event.apply(currentState)

    // should i snapshot the new state, or wait for next snapshot call?
    this.gameStates.push(newState)

    // update game w/ new state
    GameContext.game.gameState = { ...currentState, ...newState }

    this.emitter.emit('GameEvent', {
      name: event.name,
      game: GameContext.game,
      gameState: GameContext.game.gameState,
      players: GameContext.players
    })
  }

  undoLast(): void {
    this.eventStack.pop()
    this.gameStates.pop()

    const lastState = this.gameStates[this.gameStates.length - 1]

    GameContext.game.gameState = lastState

    this.emitter.emit('GameEvent', {
      name: 'Rollback',
      game: GameContext.game,
      gameState: GameContext.game.gameState,
      players: GameContext.players
    })
  }

  resetGame(): void {
    throw new Error('Method not implemented.')
  }

  resetTurn(): void {
    throw new Error('Method not implemented.')
  }
}

export default EventTracker
