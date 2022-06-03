import TurnPhase from "../../../phases/TurnPhase"
import GameEvent from "../../GameEvent"
import GameEvents from "../../GameEvents"
import { IGameStateData } from "../../../game/IGameState"

class MoveCardToZone implements GameEvent {
  name = GameEvents.TurnProgression

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      turnPhase: TurnPhase.Upkeep
    }
  }
}

export default MoveCardToZone
