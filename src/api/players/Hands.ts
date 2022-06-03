import EventTracker from "../events/EventTracker"
import Hand from "../decks/Hand"

/**
 * Functions for all player's hands
 */
class Hands {
  eventTracker: EventTracker = EventTracker.getInstance()

  constructor(
    private readonly cards: Hand[]
  ) { }
}

export default Hands
