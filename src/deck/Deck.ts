import Card from "@/cards"
import IDeck from "./IDeck";

class Deck implements IDeck {
  constructor(
    private readonly cards: typeof Card[]
  ) {
  }
  
  shuffle(): void {
    throw new Error("Method not implemented.");
  }
}

export default Deck
