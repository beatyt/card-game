import GameEvent from "../../GameEvent";
import GameEvents from "../../GameEvents";
import shuffleCards from "../../../../actions/ShuffleCards";
import { IGameStateData } from "../../../IGameState";

/**
 * Shuffle the decks for all players
 */
class ShuffleDecks implements GameEvent {
  name = GameEvents.DecksShuffled

  apply(gameState: IGameStateData): Partial<IGameStateData> {
    console.debug('players for shuffle', gameState)

    if (!gameState.playerData?.players) {
      throw new Error("Called w/o having players")
    }

    // TODO: Able to call something like Players.Decks.shuffle()?

    for (let player of gameState.playerData?.players) {
      player.deck.cards = shuffleCards(player.deck.cards)
    }

    return gameState
  }
}

export default ShuffleDecks
