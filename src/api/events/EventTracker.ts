import EventEmitter from 'events'
import GameEvent from './GameEvent'
import IEventTracker from './IEventTracker'
import Players from '../players/Players'
import GameState from '../GameState'
import { IGameStateData } from '../IGameState'
import { Listener } from '../../types/Listener'

/**
 * Tracks every event for the game to allow resets and rollbacks
 */
class EventTracker implements IEventTracker {
  static instance: EventTracker

  listeners!: Listener []
  eventStack: GameEvent[] = []
  emitter = new EventEmitter()
  gameStates: IGameStateData[] = []

  init(
    listeners: Listener[]
  ) {
    listeners.forEach(listener => {
      this.emitter.addListener(listener.event, listener.callback)
    })
  }

  static getInstance() {
    if (!EventTracker.instance) {
      EventTracker.instance = new EventTracker()
    }

    return EventTracker.instance
  }

  dispatch(event: GameEvent) {
    // snapshots the current state
    const currentState = GameState.getInstance().data
    // this.gameStates.push({ ...currentState })

    // applies the new state
    this.eventStack.push(event)
    const newState = event.apply(currentState)

    // should i snapshot the new state, or wait for next snapshot call?
    this.gameStates.push(newState)

    // update game w/ new state
    GameState.getInstance().data = { ...currentState, ...newState }

    this.emitter.emit('GameEvent', {
      name: event.name,
      gameState: GameState.getInstance().data,
      players: Players.getInstance()
    })
  }

  undoLast(): void {
    // undo the last event
    this.eventStack.pop()
    this.gameStates.pop()

    // restores state from the previous
    const lastState = this.gameStates[this.gameStates.length - 1]
    GameState.getInstance().data = lastState

    this.emitter.emit('GameEvent', {
      name: 'Rollback',
      gameState: GameState.getInstance().data,
      players: Players.getInstance()
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
