import Effect from "./Effect";

interface ICard {
  name: string;
  cardUid: string;

  effects(): Effect[]
}

export default ICard
