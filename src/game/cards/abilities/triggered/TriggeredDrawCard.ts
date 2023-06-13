import { PhaseEvents } from "../../../../api/events/GameEvents";
import TriggeredAbility from "../TriggeredAbility";

export default class TriggeredDrawCard extends TriggeredAbility {
  constructor() {
    super()
    this.triggerPhase = PhaseEvents.UpkeepStarted
    this.manaCosts = [{ value: 1, color: 'red' }]
  }
}
