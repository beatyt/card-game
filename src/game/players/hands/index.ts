import ICard from "../../cards/ICard";

export default interface IHand {
  playerId: string;
  cards: ICard[];

  add(card: ICard): void
  discard(cardId: string): void
}
