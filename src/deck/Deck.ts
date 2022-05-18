import ICard from "../cards/ICard";
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
}

export default Deck
