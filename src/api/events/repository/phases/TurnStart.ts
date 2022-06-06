import GamePhase from "../../../GamePhase"
import { IGameStateData } from "../../../IGameState"
import TurnPhase from "../../../phases/TurnPhase"
import GameEvent from "../../GameEvent"
import { GameEvents } from "../../GameEvents"

class TurnStart implements GameEvent {
  name = GameEvents.TurnProgression

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (gameState.gamePhase !== GamePhase.Started) {
      throw new Error("Game has not started. Please call Game.start() first")
    }

    return {
      turnPhase: TurnPhase.TurnStart
    }
  }
}

export default TurnStart
