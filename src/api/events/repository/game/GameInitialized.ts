import { GamePhase } from "../../..";
import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";
import Players from "../../../players/Players";
import { IGameStateData } from "../../../IGameState";

class GameInitialize implements GameEvent {
  name = GameEvents.GameInitialized

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Initialized,
      playerData: Players.getInstance()
    }
  }
}

export default GameInitialize
