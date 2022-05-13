import GameState from "@/game/GameState";
import { GameContext, GamePhase } from "../../game";
import GameEvent from "../GameEvent";

class GameEnd implements GameEvent {
  name = "Game:End"

  apply(gameState: GameState): GameState {
    gameState.gamePhase = GamePhase.Ended

    return { ...gameState }
  }

  undo(): void {

  }
}

export default GameEnd
