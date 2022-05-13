import GameState from "@/game/GameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";
import GameEvents from "../GameEvents";

class GameInitialize implements GameEvent {
  name = GameEvents.GameInitialized

  apply(gameState: GameState): Partial<GameState> {
    return {
      gamePhase: GamePhase.Initialized
    }
  }

  undo(): void {

  }
}

export default GameInitialize
