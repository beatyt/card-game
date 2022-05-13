import GameState from "@/game/GameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";

class GameInitialize implements GameEvent {
  name = "Game:Initialized"

  previous: GamePhase | undefined

  apply(gameState: GameState): GameState {
    return {
      ...gameState,
      gamePhase: GamePhase.Initialized
    }
  }

  undo(): void {

  }
}

export default GameInitialize
