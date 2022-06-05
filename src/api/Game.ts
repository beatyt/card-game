import PlayerInitializer from './players'
import EventTracker from "./events/EventTracker"
import GameStart from "./events/repository/game/GameStart"
import GameInitialized from './events/repository/game/GameInitialized'
import Players from './players/Players'
import GameEnd from './events/repository/game/GameEnd'
import CardTranslator from '../game/cards/CardTranslator'
import TurnStart from './events/repository/turns/TurnStart'
import PhaseOrder from '../game/phases/PhaseOrder'
import TurnPhase from './phases/TurnPhase'
import IGameState from './IGameState'
import InternalListener from './events/InternalListener'
import { Listener } from '../types/Listener'
import ShuffleDecks from './events/repository/cards/ShuffleDecks'
import ICard from './cards/ICard'

export interface GameConfig {
  players: PlayerInitializer[],
  listeners: Listener[]
}

let events: EventTracker
let gameState: IGameState = {
  data: {}
}

export default {
  gameState,
  // namespaces for dispatching actions
  Players: {
    drawCard(): ICard {
      throw new Error("Method not implemented.");
    },
    drawCards(num: number): ICard[] {
      throw new Error("Method not implemented.");
    }
  },
  Decks: {
    shuffle() {
      EventTracker.getInstance().dispatch(new ShuffleDecks())
    },
  },
  Hands: {

  },
  init: (gameConfig: GameConfig) => {
    events = EventTracker.getInstance()
    events.init([...gameConfig.listeners, ...InternalListener.listeners] || [])

    // translate initializers to players
    Players.getInstance().init(gameConfig.players)

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
    const nextPhase = PhaseOrder.getInstance().phases.get(turn)

    if (!nextPhase) {
      throw new Error(`No such phase ${turn}`)
    }

    console.log('nextPhase', nextPhase())

    events.dispatch(nextPhase())
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
