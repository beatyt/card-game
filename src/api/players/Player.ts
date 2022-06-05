import Hand from "../decks/Hand";
import Deck from "../decks/Deck";

/**
 * Internal class for a Player after all operations have been performed to map it from the PlayerInitializer
 * 
 * ...except we attach it to gameState hmm. should have immutable state + some dispatchable actions
 */
class Player {
  constructor(
    readonly deck: Deck,
    readonly hand: Hand,
    readonly name?: string
  ) { }

  // todo: should call a dispatcher instead
  drawCard() {
    const card = this.deck.drawCard()
    this.hand.add(card)
  }
}

export default Player
