import Card from "../Card";
import CardType from "../CardType";
import CardValue from "../CardValue";
import ICard from "../ICard";
import SubType from "../SubType";

class One extends Card {
  constructor() {
    super()
    this.name = "One"
    this.cardUid = "2"
    this.power = new CardValue(1)
    this.toughness = new CardValue(1)
    this.cardType = new CardType(CardType.Creature, true)
    this.subTypes = [SubType.Warrior]
    this.abilities = []
    this.effects = []
  }

  create(): ICard {
    return new One();
  }
}

export default One
