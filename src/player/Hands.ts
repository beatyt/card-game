import Deck from "../deck/Deck"

class Hands {
  constructor(
    private readonly decks: Deck[]
  ) {
    
  }

  shuffle() {
    this.decks.forEach(d => d.shuffle())
  }
}

export default Hands
