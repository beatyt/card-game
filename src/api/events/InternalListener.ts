import Players from "../../game/players";
import { TurnOrder } from "../../game/turns";
import { Logger } from "../../logger";
import { Listener } from "../../types/Listener";
import { EventTypes, GameEvents, PlayerEvents, TurnEvents } from "./GameEvents";
import Payload from "./Payload";
import { NotificationEvent } from "./repository";
import { PlayerEventPayloads } from "./repository/players";
import { TurnEventPayloads } from "./repository/turns";

/**
 * Internal listener for events
 * 
 * @param payload 
 */
function handler(payload: Payload) {
  const { name } = payload

  if (name === GameEvents.GameInitialized) {
    Logger.log(name)
  }

  if (name === GameEvents.GameStarted) {
    Logger.log(name)
  }
}

const cardEventHandler = (payload: NotificationEvent) => {
  const { name } = payload

  Logger.log(name)
}

const turnEventHandler = (event: TurnEventPayloads) => {
  const { name, payload } = event

  if (name === TurnEvents.TurnOrderCreated) {

  }
}

const playerEventHandler = (event: PlayerEventPayloads) => {
  const { name, payload } = event

  switch (name) {
    case (PlayerEvents.PlayerLost): {
      const { playerId } = payload;
      Players.getInstance().removePlayer(playerId)
      TurnOrder.getInstance().removePlayer(playerId)
      break;
    }
  }
}

/**
 * Internal listeners
 * 
 * For if you need to update something and have the engine listen to the update
 * 
 * Ex: A card was played, now resolve triggers
 */
const listeners: Listener[] = [
  {
    event: EventTypes.GameEvent,
    callback: handler
  },
  {
    event: EventTypes.CardEvent,
    callback: cardEventHandler
  },
  {
    event: EventTypes.TurnEvent,
    callback: turnEventHandler
  },
  {
    event: EventTypes.PlayerEvent,
    callback: playerEventHandler
  }
]

export default {
  listeners
}
