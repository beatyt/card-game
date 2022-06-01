import IGameState, { IGameStateData } from "../../game/IGameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";
import GameEvents from "../GameEvents";

class GameStart implements GameEvent {
  name = GameEvents.GameStarted

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Started
    }
  }
}

export default GameStart
