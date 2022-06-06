import Card from "../Card";
import CardType from "../CardType";

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
}

export default Fireball
