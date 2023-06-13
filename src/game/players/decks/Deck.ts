
import { Logger } from "../../../logger";
import ICard from "../../cards/ICard";
import IDeck from "./IDeck";

/**
 * Decks are composed of cards, or a Card[]
 */
class Deck implements IDeck {
  cards: ICard[]

  constructor(
    readonly playerId: string,
    cards: ICard[],
    readonly name?: string,
  ) {
    this.cards = cards
  }

  /**
   * Moves a card from here to the hand
   */
  drawCard(): ICard | undefined {
    return this.cards.pop()
  }

  drawCards(num: number): ICard[] {
    let cards = [];

    for (let i = 0; i < num; i++) {
      const card = this.drawCard();

      if (!card) {
        // lose
        throw new Error("No card")
      }

      cards.push(card);
    }

    return cards;
  }

  shuffle(): { playerId: string, cards: ICard[] } {
    console.time('Shuffle')

    const shuffledCards = this.cards.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    Logger.log(`Deck after shuffle:: player: ${this.playerId} cards: ${shuffledCards.map(value => value.name)}`)

    console.timeEnd('Shuffle')

    return { playerId: this.playerId, cards: shuffledCards }
  }
}

export default Deck
