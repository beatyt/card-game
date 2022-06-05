import { Listener } from "../../types/Listener";
import { CardEventPayloads, EventTypes } from "./GameEvents";
import Payload from "./Payload";

/**
 * Internal listener for events
 * 
 * @param payload 
 */
function handler(payload: Payload) {
  const { name } = payload

  console.log('Internal:', name)
}

const cardEventHandler = (payload: CardEventPayloads) => {
  const { name } = payload

  console.log('Internal:', name)
}

const listeners: Listener[] = [
  {
    event: 'GameEvent',
    callback: handler
  },
  {
    event: 'CardEvent',
    callback: cardEventHandler
  }
]

export default {
  listeners
}
