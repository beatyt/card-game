import { PhaseEvents } from "../../api/events/GameEvents"
import { TurnPhase } from "../../api/phases/TurnPhase"

abstract class Effect {

  // The phase when this could trigger, ex: At the beginning of your upkeep
  // @todo: What about the beginning of every upkeep, or just yours
  trigger: TurnPhase | PhaseEvents | undefined
}

class DrawCardEffect extends Effect {
  trigger = PhaseEvents.CombatStarted
}

export default Effect
