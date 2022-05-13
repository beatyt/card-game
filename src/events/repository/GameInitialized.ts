import GameState from "@/game/GameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";

class GameInitialize implements GameEvent {
  name = "Game:Initialized"

  previous: GamePhase | undefined

  apply(gameState: GameState): GameState {
    gameState.gamePhase = GamePhase.Initialized

    return { ...gameState }
  }

  undo(): void {

  }
}

export default GameInitialize
