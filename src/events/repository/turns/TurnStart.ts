import TurnPhase from "../../../phases/TurnPhase"
import GameEvent from "../../GameEvent"
import GameEvents from "../../GameEvents"
import { IGameStateData } from "../../../game/IGameState"
import GamePhase from "../../../game/GamePhase"

class TurnStart implements GameEvent {
  name = GameEvents.TurnProgression

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (gameState.gamePhase !== GamePhase.Started) {
      throw new Error("Game has not started. Please call Game.start() first")
    }

    return {
      turnPhase: TurnPhase.Upkeep
    }
  }
}

export default TurnStart
