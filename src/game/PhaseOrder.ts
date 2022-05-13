import { Phases } from "./Phases"

class PhaseOrder {
  phases: Phases[]

  constructor() {
    this.phases = [
      Phases.Upkeep,
      Phases.Main,
      Phases.Combat
    ]
  }
}
