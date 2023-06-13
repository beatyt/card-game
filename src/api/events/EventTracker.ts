import EventEmitter from 'events'
import { Logger } from '../../logger'
import GameState from '../../state/GameState'
import { Listener } from '../../types/Listener'
import GameAction from '../actions/GameAction'
import { EventTypes } from './GameEvents'
import IEventTracker from './IEventTracker'
import Payload from './Payload'
import { NotificationEvent } from './repository'

/**
 * Tracks every event for the game to allow resets and rollbacks
 */
class EventTracker implements IEventTracker {
  static instance: EventTracker

  listeners!: Listener[]
  emitter = new EventEmitter()

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

  /**
   * Notifies the client that a state modifying event has successfully applied
   * 
   * @param event 
   */
  dispatchNotifyingEvent(type: EventTypes, event: NotificationEvent) {
    this.emitter.emit(type, {
      name: event.name,
      payload: {
        ...event.payload,
      },
      gameState: {
        ...GameState.getInstance().data,
      },
    })
  }

  /**
   * Request to perform an action
   * 
   * @param event 
   */
  dispatchStateModifyingEvent(event: GameAction) {
    const currentState = GameState.getInstance()

    try {
      event.apply(currentState)
    } catch (err) {
      Logger.error(err);
    }
  }

  undoLast(): void {
    GameState.getInstance().rollback()

    this.emitter.emit('GameEvent', {
      name: 'Rollback',
      gameState: GameState.getInstance().data
    } as Payload)
  }

  resetGame(): void {
    throw new Error('Method not implemented.')
  }

  resetTurn(): void {
    throw new Error('Method not implemented.')
  }
}

export default EventTracker
