import { IGameStateData } from "../../game/IGameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";
import GameEvents from "../GameEvents";

class GameInitialize implements GameEvent {
  name = GameEvents.GameInitialized

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Initialized
    }
  }

  undo(): void {

  }
}

export default GameInitialize
