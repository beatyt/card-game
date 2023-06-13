import { TurnEvents } from "../events/GameEvents"

interface TurnOrderCreated {
  name: TurnEvents,
  payload: {
    order: string[]
  }
}

export default TurnOrderCreated
