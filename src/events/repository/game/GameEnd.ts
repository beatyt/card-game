import IGameState, { IGameStateData } from "../../game/IGameState";
import { GamePhase } from "../../game";
import GameEvent from "../GameEvent";
import GameEvents from "../GameEvents";

class GameEnd implements GameEvent {
  name = GameEvents.GameEnded

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Ended
    }
  }
}

export default GameEnd
