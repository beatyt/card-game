import GameEvent from "../events/GameEvent"
import TurnStart from "../events/repository/turns/TurnStart"
import TurnPhase from "./TurnPhase"

class PhaseOrder {
  phases: Map<TurnPhase, () => GameEvent> = new Map()
  static instance: PhaseOrder

  private constructor() {
    this.phases.set(TurnPhase.UpkeepStart, () => new TurnStart())
    this.phases.set(TurnPhase.UpkeepEnd, () => new TurnStart())
    this.phases.set(TurnPhase.Draw, () => new TurnStart())
    this.phases.set(TurnPhase.Main, () => new TurnStart())
    this.phases.set(TurnPhase.Combat, () => new TurnStart())

    PhaseOrder.instance = this
  }

  static getInstance() {
    if (!PhaseOrder.instance) {
      PhaseOrder.instance = new PhaseOrder()
    }

    return PhaseOrder.instance
  }
}

export default PhaseOrder
