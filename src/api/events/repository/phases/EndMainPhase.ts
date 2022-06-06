import GamePhase from "../../../GamePhase"
import { IGameStateData } from "../../../IGameState"
import TurnPhase from "../../../phases/TurnPhase"
import GameEvent from "../../GameEvent"
import { GameEvents } from "../../GameEvents"

class EndMainPhase implements GameEvent {
  name = GameEvents.TurnProgression

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (gameState.gamePhase !== GamePhase.Started) {
      throw new Error("Game has not started. Please call Game.start() first")
    }

    return {
      turnPhase: TurnPhase.MainEnd
    }
  }
}

export default EndMainPhase
