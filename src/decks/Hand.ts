import IHand from "@api/decks/IHand"
import ICard from "@game/cards/ICard"

export default class Hand implements IHand {
  cards: ICard[]

  constructor() {
    this.cards = []
  }

  add(card: ICard): void {
    this.cards.push(card)
  }

}
