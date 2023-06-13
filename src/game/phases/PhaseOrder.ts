import GameAction from "../../api/actions/GameAction"
import BeginUpkeep from "../../api/actions/phases/BeginUpkeep"
import EndCombatPhase from "../../api/actions/phases/EndCombatPhase"
import EndDrawPhase from "../../api/actions/phases/EndDrawPhase"
import EndMainPhase from "../../api/actions/phases/EndMainPhase"
import EndUpkeep from "../../api/actions/phases/EndUpkeep"
import StartCombatPhase from "../../api/actions/phases/StartCombatPhase"
import StartDrawPhase from "../../api/actions/phases/StartDrawPhase"
import StartMainPhase from "../../api/actions/phases/StartMainPhase"
import EndTurn from "../../api/actions/turns/EndTurn"
import StartTurn from "../../api/actions/turns/StartTurn"
import EventTracker from "../../api/events/EventTracker"
import { PhaseEvents } from "../../api/events/GameEvents"
import { TurnPhase } from "../../api/phases/TurnPhase"

interface Phase {
  current: PhaseEvents | TurnPhase
  constructor: new () => GameAction
  next: new () => GameAction
}

class PhaseOrder {
  phases: Phase[];
  static instance: PhaseOrder
  current: Phase

  private constructor() {
    this.phases = [
      { current: TurnPhase.TurnStart, constructor: StartTurn, next: BeginUpkeep },
      { current: PhaseEvents.UpkeepStarted, constructor: BeginUpkeep, next: EndUpkeep },
      { current: PhaseEvents.UpkeepEnded, constructor: EndUpkeep, next: StartDrawPhase },
      { current: PhaseEvents.DrawStarted, constructor: StartDrawPhase, next: EndDrawPhase },
      { current: PhaseEvents.DrawEnded, constructor: StartDrawPhase, next: StartMainPhase },
      { current: PhaseEvents.MainStarted, constructor: StartMainPhase, next: EndMainPhase },
      { current: PhaseEvents.MainEnded, constructor: EndMainPhase, next: StartCombatPhase },
      { current: PhaseEvents.CombatStarted, constructor: StartCombatPhase, next: EndCombatPhase },
      { current: PhaseEvents.CombatEnded, constructor: EndCombatPhase, next: EndTurn },
      { current: TurnPhase.TurnEnd, constructor: EndTurn, next: StartTurn },
    ]

    PhaseOrder.instance = this

    this.current = this.phases[0];
  }

  static getInstance() {
    if (!PhaseOrder.instance) {
      PhaseOrder.instance = new PhaseOrder()
    }

    return PhaseOrder.instance
  }

  /**
   * Dispatches an event
   */
  progress() {
    const nextPhase = this.current.next
    EventTracker.getInstance().dispatchStateModifyingEvent(new nextPhase())
    return nextPhase.name
  }

  /**
   * Recieves the update of a dispatch
   * 
   * @param phase 
   */
  setCurrent(phase: TurnPhase | PhaseEvents) {
    const p = this.phases.find(p => p.current === phase);

    if (!p) {
      throw new Error(`Unknown phase ${p}`)
    }

    this.current = p
  }
}

export default PhaseOrder
