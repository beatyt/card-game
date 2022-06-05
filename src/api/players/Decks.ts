import Deck from "../decks/Deck"

/**
 * Provides convient access for all player's decks
 */
class Decks {
  constructor(
    readonly cards: Deck[]
  ) { }
}

export default Decks
