import Card from "./Card";
import cards from './cardLibrary';

/**
 * Represents every card in the game. Used for looking up Card UIDs.
 */
class Library {
  map = new Map<string, Card>()

  constructor(
  ) {
    this.init();
  }

  init() {
    console.time('Loading Cards')

    cards.forEach(card => {
      const _card = new card()
      this.map.set(_card.cardUid, _card as Card)
    })

    console.timeEnd('Loading Cards')

    return this
  }

  get(cardUri: string) {
    return this.map.get(cardUri)
  }
}

export default Library
