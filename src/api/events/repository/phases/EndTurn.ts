import GamePhase from "../../../GamePhase"
import { IGameStateData } from "../../../IGameState"
import TurnPhase from "../../../phases/TurnPhase"
import GameEvent from "../../GameEvent"
import { GameEvents } from "../../GameEvents"

class EndTurn implements GameEvent {
  name = GameEvents.TurnProgression

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (gameState.gamePhase !== GamePhase.Started) {
      throw new Error("Game has not started. Please call Game.start() first")
    }

    // TODO: Need to set which player's turn it is
    return {
      turnPhase: TurnPhase.TurnEnd
    }
  }
}

export default EndTurn
