import Deck from "../deck/Deck"

class Hands {
  constructor(
    private readonly decks: Deck[]
  ) {
    
  }

  shuffle() {
    console.log("Called")
  }
}

export default Hands
