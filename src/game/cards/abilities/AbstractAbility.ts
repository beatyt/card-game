import { PhaseEvents } from "../../../api/events/GameEvents";
import Ability from "../Ability";
import ManaCost from "../ManaCost";

export default abstract class AbstractAbility implements Ability {
  triggerPhase!: PhaseEvents

  manaCosts!: ManaCost[]
}
