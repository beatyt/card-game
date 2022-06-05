import ICard from "../../../cards/ICard";
import { IGameStateData } from "../../../IGameState";
import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";

/**
 * Informative event that a card was drawn
 */
class CardDrawn implements GameEvent {
  name = GameEvents.CardDrawn

  constructor(
    readonly playerId: string,
    readonly card: ICard,
  ) { }

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    return gameState
  }
}

export default CardDrawn
