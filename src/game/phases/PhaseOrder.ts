import GameEvent from "../../api/events/GameEvent"
import BeginUpkeep from "../../api/events/repository/phases/BeginUpkeep"
import EndCombatPhase from "../../api/events/repository/phases/EndCombatPhase"
import EndMainPhase from "../../api/events/repository/phases/EndMainPhase"
import EndTurn from "../../api/events/repository/phases/EndTurn"
import EndUpkeep from "../../api/events/repository/phases/EndUpkeep"
import StartCombatPhase from "../../api/events/repository/phases/StartCombatPhase"
import StartDrawPhase from "../../api/events/repository/phases/StartDrawPhase"
import StartMainPhase from "../../api/events/repository/phases/StartMainPhase"
import TurnStart from "../../api/events/repository/phases/TurnStart"
import TurnPhase from "../../api/phases/TurnPhase"

class PhaseOrder {
  phases: Map<TurnPhase, () => GameEvent> = new Map()
  static instance: PhaseOrder

  private constructor() {
    this.phases.set(TurnPhase.TurnStart, () => new BeginUpkeep())
    this.phases.set(TurnPhase.UpkeepStart, () => new EndUpkeep())
    this.phases.set(TurnPhase.UpkeepEnd, () => new StartDrawPhase())
    this.phases.set(TurnPhase.Draw, () => new StartMainPhase())
    this.phases.set(TurnPhase.MainStart, () => new EndMainPhase())
    this.phases.set(TurnPhase.MainEnd, () => new StartCombatPhase())
    this.phases.set(TurnPhase.CombatStart, () => new EndCombatPhase())
    this.phases.set(TurnPhase.CombatEnd, () => new EndTurn())
    this.phases.set(TurnPhase.TurnEnd, () => new TurnStart())

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
