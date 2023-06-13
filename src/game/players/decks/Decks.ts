import ICard from "../../cards/ICard";
import Deck from "./Deck";
import IDeck from "./IDeck";

/**
 * Provides convient access for all player's decks
 */
class Decks {
  constructor(
    readonly cards: IDeck[]
  ) {
  }

  /**
   * Uses a Schwartzian transform
   */
  shuffleCards = (): { playerId: string, cards: ICard[] }[] => {
    return this.cards.map(c => c.shuffle())
  }
}

export default Decks
