import { GamePhase } from "../../..";
import { IGameStateData } from "../../../IGameState";
import TurnPhase from "../../../phases/TurnPhase";
import GameEvent from "../../GameEvent";
import { GameEvents } from "../../GameEvents";

class GameStart implements GameEvent {
  name = GameEvents.GameStarted

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Started,
      turnPhase: TurnPhase.TurnStart
    }
  }
}

export default GameStart
