import Effect from "./Effect";
import ICard from "./ICard";

/**
 * Would only want to load the cards once at startup, 
 * or only the cards within the game
 * 
 * Flyway pattern?
 */
abstract class Card implements ICard {
  name!: string;
  cardUid!: string;

  effects(): Effect[] {
    throw new Error("Method not implemented.");
  }

  resolve(): void {
    throw new Error("Method not implemented.");
  }

  rollback(): void {
    throw new Error("Method not implemented.");
  }
}

export default Card
