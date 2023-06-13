import EventTracker from "../../api/events/EventTracker";
import { EventTypes, PlayerEvents } from "../../api/events/GameEvents";

class PlayerLostException {
  constructor(playerId: string) {
    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PlayerEvent,
      {
        name: PlayerEvents.PlayerLost,
        payload: {
          playerId,
        }
      }
    )
  }
}

export {
  PlayerLostException
};

