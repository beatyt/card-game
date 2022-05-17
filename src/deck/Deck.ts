import ICard from "../cards/ICard";
import IDeck from "./IDeck";

/**
 * Decks are composed of cards, or a Card[]
 */
class Deck implements IDeck {
  constructor(
    private readonly cards: ICard[]
  ) {
  }
  
  shuffle(): void {
    throw new Error("Method not implemented.");
  }
}

export default Deck
