import { GamePhase } from "../../..";
import { IGameStateData } from "../../../IGameState";
import GameEvent from "../../GameEvent";
import { GameEvents } from "../../GameEvents";

class GameStart implements GameEvent {
  name = GameEvents.GameStarted

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Started
    }
  }
}

export default GameStart
