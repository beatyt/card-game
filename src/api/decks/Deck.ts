import ICard from "../cards/ICard";
import { IDeck } from "../IGameState";

/**
 * Decks are composed of cards, or a Card[]
 */
class Deck implements IDeck {
  playerId: string;

  cards: ICard[];

  constructor(
    playerId: string,
    cards: ICard[],
    readonly name?: string,
  ) {
    this.playerId = playerId
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
