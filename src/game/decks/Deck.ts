import shuffleCards from "../../actions/ShuffleCards";
import ICard from "../../api/cards/ICard";
import { IDeck } from "../../api/IGameState";
import DeckFunctions from "./DeckFunctions";

/**
 * Decks are composed of cards, or a Card[]
 */
class Deck implements IDeck, DeckFunctions {
  cards: ICard[]

  constructor(
    readonly playerId: string,
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

  shuffle(): ICard[] {
    this.cards = shuffleCards(this.cards)
    return this.cards
  }
}

export default Deck
