import TurnPhase from "phases/TurnPhase"

abstract class Effect {

  // The phase when this could trigger, ex: At the beginning of your upkeep
  // @todo: What about the beginning of every upkeep, or just yours
  trigger: TurnPhase | undefined
}

export default Effect
