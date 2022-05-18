import ICard from "../cards/ICard";
import IDeck from "./IDeck";

/**
 * Decks are composed of cards, or a Card[]
 */
class Deck implements IDeck {
  constructor(
    private cards: ICard[],
    private name?: string,
  ) {
  }

  /**
   * Uses a Schwartzian transform
   */
  shuffle(): void {
    console.time('Shuffle')

    this.cards = this.cards.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    console.log(`Deck after shuffle: ${this.cards.map(value => value.name)}`)

    console.timeEnd('Shuffle')
  }
}

export default Deck
