import TurnPhase from "../../../api/phases/TurnPhase";
import AbstractAbility from "./AbstractAbility";
import ITriggeredAbility from "./ITriggeredAbility";

export default abstract class TriggeredAbility extends AbstractAbility implements ITriggeredAbility {
  triggerPhase!: TurnPhase

  isTriggered(currentPhase: TurnPhase): boolean {
    return currentPhase === this.triggerPhase
  }
}
