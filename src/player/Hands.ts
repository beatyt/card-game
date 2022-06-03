import EventTracker from "../events/EventTracker"
import ICard from "../cards/ICard"

/**
 * Functions for all player's hands
 */
class Hands {
  eventTracker: EventTracker = EventTracker.getInstance()

  constructor(
    private readonly cards: ICard[][]
  ) { }
}

export default Hands
