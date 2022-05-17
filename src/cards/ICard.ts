import Effect from "./Effect";

interface ICard {
  name: string;

  effects(): Effect[]
}

export default ICard
