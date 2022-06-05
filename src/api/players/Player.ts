import Hand from "../decks/Hand";
import Deck from "../decks/Deck";
import { IDeck, IHand, IPlayer } from "../IGameState";
import ICard from "../cards/ICard";

/**
 * Internal class for a Player after all operations have been performed to map it from the PlayerInitializer
 * 
 * ...except we attach it to gameState hmm. should have immutable state + some dispatchable actions
 */
class Player implements IPlayer {
  readonly deck: IDeck
  readonly hand: IHand

  constructor(
    readonly playerId: string,
    readonly deckCards: ICard[],
    readonly name?: string
  ) {
    this.deck = new Deck(this.playerId, deckCards, name)
    this.hand = new Hand(this.playerId, [])
  }

  // todo: should call a dispatcher instead
  drawCard() {
    const card = (this.deck as unknown as Deck).drawCard();
    (this.hand as unknown as Hand).add(card)
  }
}

export default Player
