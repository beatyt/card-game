import Player from '../player'
import EventTracker from "../events/EventTracker"
import GameStart from "../events/repository/GameStart"
import GameInitialized from '../events/repository/GameInitialized'
import Players from '../player/Players'
import Library from '../cards/Library'
import IGameState from './IGameState'
import GameEnd from '../events/repository/GameEnd'
import CardTranslator from '../cards/CardTranslator'

export interface GameConfig {
  players: Player[],
  library: Library,
  listeners?: { event: string, callback: (...args: any[]) => void }[]
}

let events: EventTracker
let turn: number = 0
let gameState: IGameState = {
  data: {}
}

export default {
  gameState,
  init: (gameConfig: GameConfig) => {
    new CardTranslator([])
    new Players(gameConfig.players)
    events = new EventTracker(gameConfig.listeners || [])

    events.dispatch(new GameInitialized())
  },
  /**
   * Starting player
   * Draw cards
   * Mulligans
   * Initialize stuff
  */
  start() {
    events.dispatch(new GameStart())
  },
  end() {
    events.dispatch(new GameEnd())
  },
  rollback() {
    events.undoLast()
  },
  progressPhase: () => {
    // any end of phase rules
    // this.events.dispatch('phase:end')
    // fire off card rules that trigger on this phase
  },
  progressTurn: () => {
    turn++
  }
}
