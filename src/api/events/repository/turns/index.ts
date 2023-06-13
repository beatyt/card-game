import { TurnPhase } from "../../../phases/TurnPhase"
import { TurnEvents } from "../../GameEvents"

type EndTurnEvent = {
  name: TurnEvents.TurnChanged,
  payload: {
    turn: TurnPhase.TurnEnd,
  }
}

type StartTurnEvent = {
  name: TurnEvents.TurnChanged,
  payload: {
    turn: TurnPhase.TurnStart,
    currentTurnsPlayerId: string,
  }
}

type TurnOrderEvent = {
  name: TurnEvents.TurnOrderCreated,
  payload: {
    order: string[]
  }
}

export type TurnEventPayloads = StartTurnEvent | EndTurnEvent | TurnOrderEvent
