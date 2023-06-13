import { EventTypes } from "../api/events/GameEvents";

export interface Listener {
  event: EventTypes,
  callback: (...args: any[]) => void
}
