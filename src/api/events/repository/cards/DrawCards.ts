import { IGameStateData } from "../../../../game/IGameState";
import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";

/**
 * Shuffle the decks for all players
 */
class DrawCards implements GameEvent {
  name = GameEvents.DecksShuffled

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (!gameState.players?.players) {
      throw new Error("Called w/o having players")
    }

    for (let player of gameState.players?.players) {
      player.drawCard()
    }

    return gameState
  }
}

export default DrawCards
