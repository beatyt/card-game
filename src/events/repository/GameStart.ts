import GameState from "@/game/GameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";

class GameStart implements GameEvent {
  name = "Game:Start"

  previous: GamePhase | undefined

  apply(gameState: GameState): GameState {
    return {
      ...gameState,
      gamePhase: GamePhase.Started
    }
  }

  undo(): void {

  }
}

export default GameStart
