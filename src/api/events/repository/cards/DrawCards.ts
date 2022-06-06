import { IGameStateData } from "../../../IGameState";
import Players from "../../../players/Players";
import GameEvent from "../../GameEvent";
import { CardEvents } from "../../GameEvents";

class DrawCards implements GameEvent {
  name = CardEvents.CardDraw

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
