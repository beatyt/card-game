import ICard from "../api/cards/ICard"
import IHand from "./IHand"

export default class Hand implements IHand {
  cards: ICard[]

  constructor() {
    this.cards = []
  }

  add(card: ICard): void {
    this.cards.push(card)
  }

}
