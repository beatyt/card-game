import { IGameStateData } from "../../../IGameState";
import Players from "../../../players/Players";
import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";

/**
 * Shuffle the decks for all players
 */
class DrawCards implements GameEvent {
  name = GameEvents.CardDraw

  constructor(readonly num: number = 1) { }

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (!gameState.playerData?.players) {
      throw new Error("Called w/o having players")
    }

    Players.getInstance().drawCards(this.num)

    return gameState
  }
}

export default DrawCards
