import Deck from "../../api/decks/Deck";
import ICard from "./ICard";
import map from '.'

export interface ICardTranslator {
  lookupCard(cardUri: string): ICard | undefined
  lookupCards(cardUris: string[]): ICard[]
  lookupDecks(cardUris: string[][]): Deck[]
}

class CardTranslator implements ICardTranslator {
  static instance: CardTranslator

  constructor(
    /**
     * Could pass in only the cards players have to load a subset
     */
    readonly cardUris?: string[]
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

  lookupDecks(cardUris: string[][]): Deck[] {
    console.time('Loading Decks')

    const decks = cardUris.map(cardUris => {
      const cards = this.lookupCards(cardUris)
      const deck = new Deck(cards)
      return deck
    })

    console.timeEnd('Loading Decks')

    return decks
  }
}

export default CardTranslator
