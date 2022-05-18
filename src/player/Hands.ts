import EventTracker from "../events/EventTracker"
import ShuffleHands from "../events/repository/ShuffleHands"
import ICard from "../cards/ICard"

class Hands {
  eventTracker: EventTracker = EventTracker.getInstance()

  constructor(
    private readonly cards: ICard[][]
  ) { }

  shuffle() {
    this.eventTracker.dispatch(new ShuffleHands())
  }
}

export default Hands
