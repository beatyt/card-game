import Card from "../cards/Card"
import ICard from "../cards/ICard"

interface IStack {
  addCard(card: ICard): void
  removeCard(card: ICard): void
  resolve(): void
}

class Stack implements IStack {
  static instance: IStack
  cards: ICard[] = []

  getInstance(): IStack {
    if (!Stack.instance) {
      Stack.instance = new Stack()
    }

    return Stack.instance
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }

  removeCard(card: Card): void {
    this.cards = this.cards.filter(c => c !== card);
  }

  resolve(): void {
    this.cards.forEach(c => c.resolve());
  }
}