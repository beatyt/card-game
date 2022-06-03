import PlayerInitializer from '../player'
import EventTracker from "../events/EventTracker"
import GameStart from "../events/repository/game/GameStart"
import GameInitialized from '../events/repository/game/GameInitialized'
import Players from './players/Players'
import IGameState from './IGameState'
import GameEnd from '../events/repository/game/GameEnd'
import CardTranslator from './cards/CardTranslator'
import TurnStart from '../events/repository/turns/TurnStart'
import PhaseOrder from './phases/PhaseOrder'
import TurnPhase from 'phases/TurnPhase'

export interface GameConfig {
  players: PlayerInitializer[],
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
    new CardTranslator()
    // translate initializers to players
    gameConfig.players
    const players = new Players(gameConfig.players)
    events = new EventTracker(gameConfig.listeners || [])

    events.dispatch(new GameInitialized(players))
  },
  /**
   * Starting player
   * Draw cards
   * Mulligans
   * Initialize stuff
  */
  start() {
    events.dispatch(new GameStart())
    events.dispatch(new TurnStart())
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
  setPhase: (turn: TurnPhase) => {
    const phase = PhaseOrder.getInstance().phases.get(turn)

    if (!phase) {
      throw new Error(`No such phase ${turn}`)
    }

    events.dispatch(phase())
  },
  progressTurn: () => {
    // get current phase
    const currentPhase = gameState.data.turnPhase

    if (!currentPhase) {
      throw new Error("There is no current phase")
    }

    const nextPhase = PhaseOrder.getInstance().phases.get(currentPhase)

    if (!nextPhase) {
      throw new Error("No next phase set")
    }

    events.dispatch(nextPhase())
  }
}
