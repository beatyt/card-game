
import Actions from '../actions'
import Players from '../actions/players'
import CardLink from './cards/CardLink'
import PhaseOrder from '../game/phases/PhaseOrder'
import Game from '../index'
import GameState from '../state/GameState'
import { Listener } from '../types/Listener'
import { TurnOrderStrategy } from '../types/turns'
import { GameEvents } from './events'
import EventTracker from "./events/EventTracker"
import { PlayerInitializer } from "./players/PlayerInitializer"
import { PhaseEvents } from './events/GameEvents'

export interface GameConfig {
  players: PlayerInitializer[],
  listeners: Listener[]
  /**
   * Maybe in the future want custom cards or something
   */
  library?: CardLink[]

  turnOrderStrategy: TurnOrderStrategy
}

let events: EventTracker

export default {
  // namespaces for dispatching actions
  Players,
  ...Actions,
  Events: GameEvents,
  Phases: {
    progress: () => {
      // any end of phase rules
      // this.events.dispatch('phase:end')
      // fire off card rules that trigger on this phase
      const currentPhase = GameState.getInstance().data.turnPhase;
      const phaseOrder = PhaseOrder.getInstance().phases.find(p => p.current === currentPhase)

      if (!phaseOrder) {
        throw new Error(`No such phase ${phaseOrder}`)
      }

      events.dispatchStateModifyingEvent(new phaseOrder.next())
    },
    setPhase: (turn: PhaseEvents) => {
      // set current phase
      const phaseOrder = PhaseOrder.getInstance().phases.find(p => p.current === turn)

      if (!phaseOrder) {
        throw new Error(`No such phase ${phaseOrder}`)
      }

      events.dispatchStateModifyingEvent(new phaseOrder.constructor())
    },
  },
  Turns: {
    /**
     * Pass to the next player in the order
     */
    progress: () => {
      throw new Error("not yet implemented")
    }
  }
} as typeof Game
