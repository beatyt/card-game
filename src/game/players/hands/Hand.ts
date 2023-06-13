import IHand from ".";
import { Logger } from "../../../logger";
import { Area } from "../../../types/zones/Area";
import ICard from "../../cards/ICard";

export default class Hand implements IHand {
  cards: ICard[] = []

  constructor(
    readonly playerId: string,
  ) { }

  add(card: ICard): void {
    this.cards.push(card)

    card.location = Area.Hand

    Logger.log(`${card.name} added to ${this.playerId}'s hand`)
  }

  discard(cardId: string, zone = Area.Graveyard): void {
    const card = this.cards.find(c => c.id === cardId)

    if (!card) {
      throw new Error(`No card in hand ${card}`)
    }

    card.moveToZone(zone);
    this.removeCardFromHand(card);
  }

  removeCardFromHand(card: ICard) {
    this.cards = this.cards.filter(c => c !== card);
  }
}
