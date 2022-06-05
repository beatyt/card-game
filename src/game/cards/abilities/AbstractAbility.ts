import TurnPhase from "../../../api/phases/TurnPhase";
import Ability from "../Ability";
import ManaCost from "../ManaCost";

export default abstract class AbstractAbility implements Ability {
  triggerPhase!: TurnPhase

  manaCosts!: ManaCost[]
}