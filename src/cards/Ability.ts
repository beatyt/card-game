import ManaCost from "./ManaCost";

export default interface Ability {
  get manaCosts(): ManaCost[]
}
