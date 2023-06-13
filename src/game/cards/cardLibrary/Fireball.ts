import Card from "../Card";
import CardType from "../CardType";
import ICard from "../ICard";

class Fireball extends Card {
  constructor() {
    super()
    this.name = "Fireball"
    this.cardUid = "3"
    this.cardType = new CardType(CardType.Sorcery, false)
    this.subTypes = []
    this.abilities = []
    this.effects = []
  }

  create(): ICard {
    return new Fireball();
  }
}

export default Fireball
