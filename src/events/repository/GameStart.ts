import GameState from "@/game/GameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";
import GameEvents from "../GameEvents";

class GameStart implements GameEvent {
  name = GameEvents.GameStarted

  apply(gameState: GameState): Partial<GameState> {
    return {
      gamePhase: GamePhase.Started
    }
  }

  undo(): void {

  }
}

export default GameStart
