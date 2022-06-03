import ICard from "../../game/cards/ICard";
import IDeck from "./IDeck";

/**
 * Decks are composed of cards, or a Card[]
 */
class Deck implements IDeck {
  cards: ICard[];

  constructor(
    cards: ICard[],
    readonly name?: string,
  ) {
    this.cards = cards
  }

  drawCard(): ICard {
    throw new Error("Method not implemented.");
  }

  drawCards(num: number): ICard[] {
    throw new Error("Method not implemented.");
  }
}

export default Deck
