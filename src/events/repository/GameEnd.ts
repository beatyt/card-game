import GameState from "@/game/GameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";
import GameEvents from "../GameEvents";

class GameEnd implements GameEvent {
  name = GameEvents.GameEnded

  apply(gameState: GameState): Partial<GameState> {
    return {
      gamePhase: GamePhase.Ended
    }
  }

  undo(): void {

  }
}

export default GameEnd
