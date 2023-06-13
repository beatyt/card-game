import Actions from './actions'
import Players from './actions/players'
import Turns from './actions/turns'
import Phases from './actions/phases'
import { GameEvents } from './api/events'

/**
 * These are all actions the client can dispatch
 * 
 * Events and gameState provide readonly notifications and updates
 */
type Game = {
  Events: typeof GameEvents

  Turns: typeof Turns

  Players: typeof Players

  Phases: typeof Phases

} & typeof Actions

export default {
  Events: GameEvents,
  ...Actions,
  Players,
  Turns,
  Phases,
} as Game
