import Card from "../Card";
import CardType from "../CardType";
import CardValue from "../CardValue";
import SubType from "../SubType";

class Zero extends Card {
  constructor() {
    super()
    this.name = "Zero"
    this.cardUid = "1"
    this.power = new CardValue(1)
    this.toughness = new CardValue(1)
    this.cardType = new CardType(CardType.Creature, true)
    this.subTypes = [SubType.Warrior]
    this.abilities = []
    this.effects = []
  }

}

export default Zero
