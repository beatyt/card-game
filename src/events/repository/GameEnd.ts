import GameState from "@/game/GameState";
import { GameContext, GamePhase } from "../../game";
import GameEvent from "../GameEvent";

class GameEnd implements GameEvent {
  name = "Game:End"

  apply(gameState: GameState): GameState {
    return {
      ...gameState,
      gamePhase: GamePhase.Ended
    }
  }

  undo(): void {

  }
}

export default GameEnd
