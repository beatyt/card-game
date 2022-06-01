import TurnPhase from "./TurnPhase"

class Phase {
  current: TurnPhase
  next: TurnPhase

  constructor(
    current: TurnPhase,
    next: TurnPhase
  ) {
    this.current = current
    this.next = next
  }
}

export default Phase
