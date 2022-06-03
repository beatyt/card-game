import GameEvent from "../../GameEvent"
import GameEvents from "../../GameEvents"
import { IGameStateData } from "../../../game/IGameState"

class MoveCardToZone implements GameEvent {
  name = GameEvents.MoveCardToZone

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    throw new Error("Not implemented")
  }
}

export default MoveCardToZone
