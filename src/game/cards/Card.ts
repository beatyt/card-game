import Ability from "./Ability";
import CardType from "./CardType";
import CardValue from "./CardValue";
import Effect from "./Effect";
import ICard from "../../api/cards/ICard";
import SubType from "./SubType";

/**
 * Would only want to load the cards once at startup, 
 * or only the cards within the game
 * 
 * Flyway pattern?
 */
abstract class Card implements ICard {
  name!: string

  cardUid!: string

  ownerId!: string;

  power!: CardValue

  toughness!: CardValue

  cardType!: CardType

  subTypes!: SubType[]

  abilities!: Ability[]

  // ex: Draw A Card
  effects!: Effect[]

  resolve(): void {
    throw new Error("Method not implemented.");
  }

  rollback(): void {
    throw new Error("Method not implemented.");
  }
}

export default Card
