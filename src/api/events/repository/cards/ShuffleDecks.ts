import { IGameStateData } from "../../../../game/IGameState";
import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";
import shuffleCards from "../../../../actions/ShuffleCards";

/**
 * Shuffle the decks for all players
 */
class ShuffleDecks implements GameEvent {
  name = GameEvents.DecksShuffled

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    if (!gameState.players?.players) {
      throw new Error("Called w/o having players")
    }

    for (let player of gameState.players?.players) {
      player.deck.cards = shuffleCards(player.deck.cards)
    }

    return gameState
  }
}

export default ShuffleDecks
