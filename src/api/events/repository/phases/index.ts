import { PhaseEvents } from "../../GameEvents"

type UpkeepStarted = {
  name: PhaseEvents.UpkeepStarted,
  payload: {}
}

type UpkeepEnded = {
  name: PhaseEvents.UpkeepEnded,
  payload: {}
}

type DrawStarted = {
  name: PhaseEvents.DrawStarted,
  payload: {}
}

type DrawEnded = {
  name: PhaseEvents.DrawEnded,
  payload: {}
}

type CombatStarted = {
  name: PhaseEvents.CombatStarted,
  payload: {}
}

type CombatEnded = {
  name: PhaseEvents.CombatEnded,
  payload: {}
}


type MainStarted = {
  name: PhaseEvents.MainStarted,
  payload: {}
}

type MainEnded = {
  name: PhaseEvents.MainEnded,
  payload: {}
}

/**
 * experimental
 */
type PhaseChanged = {
  name: PhaseEvents.PhaseChanged,
  payload: {
    phase: PhaseEvents
  }
}

export type PhaseEventPayloads =
  UpkeepStarted |
  UpkeepEnded |
  DrawStarted |
  DrawEnded |
  CombatStarted |
  CombatEnded |
  MainStarted |
  MainEnded |
  PhaseChanged
