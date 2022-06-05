import TurnPhase from "../../../../api/phases/TurnPhase";
import TriggeredAbility from "../TriggeredAbility";

export default class TriggeredDrawCard extends TriggeredAbility {
  constructor() {
    super()
    this.triggerPhase = TurnPhase.UpkeepStart
    this.manaCosts = [{ value: 1, color: 'red' }]
  }
}
