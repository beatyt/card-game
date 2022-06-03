import ICard from "@game/cards/ICard";

export default interface IHand {
  add(card: ICard): void
}
