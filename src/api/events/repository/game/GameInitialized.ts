import { IGameStateData } from "../../../../game/IGameState";
import { GamePhase } from "../../..";
import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";
import Players from "../../../players/Players";

class GameInitialize implements GameEvent {
  name = GameEvents.GameInitialized

  constructor(
    private readonly players: Players
  ) { }

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return {
      gamePhase: GamePhase.Initialized,
      players: this.players
    }
  }
}

export default GameInitialize
