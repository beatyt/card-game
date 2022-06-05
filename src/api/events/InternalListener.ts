import { Listener } from "../../types/Listener";
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

const listeners: Listener[] = [
  {
    event: 'GameEvent',
    callback: handler
  }
]

export default {
  listeners
}
