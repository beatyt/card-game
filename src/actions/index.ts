import { GameConfig } from '../api'
import EndGame from '../api/actions/game/EndGame'
import InitializeGame from '../api/actions/game/InitializeGame'
import StartGame from '../api/actions/game/StartGame'
import StartTurn from '../api/actions/turns/StartTurn'
import EventTracker from '../api/events/EventTracker'
import InternalListener from '../api/events/InternalListener'
import GameState from '../state/GameState'

let events: EventTracker

const actions = {
  init: (gameConfig: GameConfig) => {

    events = EventTracker.getInstance()
    events.init([...InternalListener.listeners, ...gameConfig.listeners] || [])

    events.dispatchStateModifyingEvent(new InitializeGame(gameConfig))
  },

  /**
   * Starting player
   * Draw cards
   * Mulligans
   * Initialize stuff
  */
  start() {
    events.dispatchStateModifyingEvent(new StartGame())
    events.dispatchStateModifyingEvent(new StartTurn())
  },

  end() {
    events.dispatchStateModifyingEvent(new EndGame())
  },

  rollback() {
    events.undoLast()
  },
}

const state = {
  state: () => GameState.getInstance().data
}

export default {
  ...actions,
  ...state,
}
