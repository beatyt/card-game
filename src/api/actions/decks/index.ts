import { DeckEvents } from "../../events/GameEvents"

interface DecksShuffledEvent {
  name: DeckEvents.DecksShuffled,
  payload: {}
}

interface DeckShuffledEvent {
  name: DeckEvents.DeckShuffled,
  payload: {
    playerId?: string
  }
}

export type DeckEventPayloads =
  DecksShuffledEvent |
  DeckShuffledEvent
