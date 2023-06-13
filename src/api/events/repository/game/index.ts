import { GameEvents } from "../../GameEvents"

type GameInitializedEvent = {
  name: GameEvents.GameInitialized,
  payload: {}
}

type GameStartedEvent = {
  name: GameEvents.GameStarted,
  payload: {}
}

type GameEndedEvent = {
  name: GameEvents.GameEnded,
  payload: {}
}

export type GameEventPayloads = GameInitializedEvent | GameStartedEvent | GameEndedEvent
