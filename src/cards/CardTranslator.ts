import Deck from "../deck/Deck";
import ICard from "./ICard";

export interface ICardTranslator {
  lookupCard(cardUri: string): ICard | undefined
  lookupCards(cardUris: string[]): ICard[]
  lookupDecks(cardUris: string[][]): Deck[]
}

class CardTranslator implements ICardTranslator {
  static instance: CardTranslator

  constructor(
    readonly cards: ICard[]
  ) {
    CardTranslator.instance = this
   }

  static getInstance(): CardTranslator {
    if (!CardTranslator.instance) {
      throw new Error("Not initialized")
    }

    return CardTranslator.instance
  }

  lookupCard(cardUri: string): ICard | undefined {
    return this.cards.find(c => cardUri === c.name)
  }

  lookupCards(cardUris: string[]): ICard[] {
    let cards = []

    for (let cardUri of cardUris) {
      const card = this.lookupCard(cardUri)

      if (card) {
        cards.push(card)
      } else {
        console.error(`Card ${cardUri} not found`)
      }
    }

    return cards;
  }

  lookupDecks(cardUris: string[][]): Deck[] {
    return cardUris.map(cardUris => {
      const cards = this.lookupCards(cardUris)
      const deck = new Deck(cards)
      return deck
    })
  }
}

export default CardTranslator
