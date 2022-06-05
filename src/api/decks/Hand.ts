import ICard from "../cards/ICard";
import { IHand } from "../IGameState";

export default class Hand implements IHand {
  constructor(
    readonly playerId: string,
    readonly cards: ICard[],
  ) { }

  add(card: ICard): void {
    this.cards.push(card)
  }

}
