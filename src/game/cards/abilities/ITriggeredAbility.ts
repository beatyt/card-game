import TurnPhase from "../../../api/phases/TurnPhase";
import Ability from "../Ability";

export default interface ITriggeredAbility extends Ability {
  /**
   * An ability that is triggered ex: Beginning of Upkeep
   */
  isTriggered(currentPhase: TurnPhase): boolean
}
