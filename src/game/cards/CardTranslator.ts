import Deck from "../../api/decks/Deck";
import ICard from "../../api/cards/ICard";
import map from '.'

export interface ICardTranslator {
  lookupCard(cardUri: string): ICard | undefined
  lookupCards(cardUris: string[]): ICard[]
}

class CardTranslator implements ICardTranslator {
  static instance: CardTranslator

  cardUris?: string[]

  private constructor() {
    CardTranslator.instance = this
   }

   init(cardUris?: string[]) {
    this.cardUris = cardUris
   }

  static getInstance(): CardTranslator {
    if (!CardTranslator.instance) {
      new CardTranslator()
    }

    return CardTranslator.instance
  }

  lookupCard(cardUri: string): ICard | undefined {
    return map.map.get(cardUri)
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
