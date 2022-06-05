import Hand from "../decks/Hand";
import Deck from "../decks/Deck";
import { IPlayer } from "../IGameState";
import ICard from "../cards/ICard";
import EventTracker from "../events/EventTracker";
import CardDrawn from "../events/repository/cards/CardDrawn";

/**
 * Internal class for a Player after all operations have been performed to map it from the PlayerInitializer
 * 
 * ...except we attach it to gameState hmm. should have immutable state + some dispatchable actions
 */
class Player implements IPlayer {
  readonly deck: Deck
  readonly hand: Hand

  constructor(
    readonly playerId: string,
    readonly deckCards: ICard[],
    readonly name?: string
  ) {
    this.deck = new Deck(this.playerId, deckCards, name)
    this.hand = new Hand(this.playerId, [])
  }

  drawCard() {
    const card = this.deck.drawCard();

    if (!card) {
      // TODO: Lose condition
      throw new Error("Drew an empty card")
    }

    this.hand.add(card)

    EventTracker.getInstance().dispatch(new CardDrawn(this.playerId, card))
  }

  drawCards(num: number) {
    for (let draws = 0; draws < num - 1; draws++) {
      this.drawCard()
    }
  }
}

export default Player
