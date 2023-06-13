import { IPlayer } from ".";
import { Logger } from "../../logger";
import ICard from "../cards/ICard";
import ManaValue from "../cards/ManaValue";
import { PlayerLostException } from "../exceptions";
import Deck from "./decks/Deck";
import Hand from "./hands/Hand";

/**
 * Internal class for a Player after all operations have been performed to map it from the PlayerInitializer
 * 
 * ...except we attach it to gameState hmm. should have immutable state + some dispatchable actions
 */
class Player implements IPlayer {
  readonly deck: Deck
  readonly hand: Hand

  floatingMana: ManaValue[] = []

  constructor(
    readonly playerId: string,
    readonly deckCards: ICard[],
    readonly name?: string
  ) {
    this.deck = new Deck(this.playerId, deckCards, name)
    this.hand = new Hand(this.playerId)
  }

  drawCard(): ICard {
    const card = this.deck.drawCard();

    Logger.log(`${this.playerId} drew ${card?.name}`)

    if (!card) {
      throw new PlayerLostException(this.playerId);
    }

    this.hand.add(card)

    return card;
  }

  drawCards(num: number): ICard[] {
    let cards = [];

    for (let draws = 0; draws <= num - 1; draws++) {
      cards.push(this.drawCard())
    }

    return cards;
  }

  shuffleDeck() {
    return this.deck.shuffle();
  }
}

export default Player
