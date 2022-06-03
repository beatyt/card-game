import EventTracker from "../events/EventTracker"
import ShuffleDecks from "../events/repository/cards/ShuffleDecks"
import Deck from "../deck/Deck"

/**
 * Provides convient access for all player's decks
 */
class Decks {
  eventTracker: EventTracker = EventTracker.getInstance()

  constructor(
    private readonly cards: Deck[]
  ) { }

  shuffle() {
    this.eventTracker.dispatch(new ShuffleDecks())
  }
}

export default Decks
