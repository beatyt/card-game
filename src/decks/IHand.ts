import ICard from "../api/cards/ICard";

export default interface IHand {
  add(card: ICard): void
}
