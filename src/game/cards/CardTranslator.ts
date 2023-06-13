import map from '.';
import ICard from "./ICard";

export interface ICardTranslator {
  lookupCard(cardUri: string): ICard | undefined
  lookupCards(cardUris: string[]): ICard[]
}

class CardTranslator implements ICardTranslator {
  static instance: CardTranslator

  private constructor() {
    CardTranslator.instance = this
  }

  static getInstance(): CardTranslator {
    if (!CardTranslator.instance) {
      new CardTranslator()
    }

    return CardTranslator.instance
  }

  lookupCard(cardUri: string): ICard | undefined {
    return map.Library.get(cardUri)
  }

  lookupCards(cardUris: string[]): ICard[] {
    console.time('Card Lookup')

    let cards = []

    for (let cardUri of cardUris) {
      const card = this.lookupCard(cardUri)

      if (card) {
        cards.push(card)
      } else {
        console.error(`Card ${cardUri} not found`)
      }
    }

    console.timeEnd('Card Lookup')

    return cards;
  }
}

export default CardTranslator
