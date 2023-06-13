import EventTracker from "../../api/events/EventTracker";
import { CardEvents, EventTypes } from "../../api/events/GameEvents";
import { Area } from "../../types/zones/Area";
import Ability from "./Ability";
import CardType from "./CardType";
import CardValue from "./CardValue";
import Effect from "./Effect";
import ICard from "./ICard";
import SubType from "./SubType";

/**
 * Would only want to load the cards once at startup, 
 * or only the cards within the game
 * 
 * Flyway pattern?
 */
abstract class Card implements ICard {
  name!: string

  id!: string

  cardUid!: string

  ownerId!: string;

  originalOwnerId!: string;

  power!: CardValue

  toughness!: CardValue

  cardType!: CardType

  subTypes!: SubType[]

  abilities!: Ability[]

  // ex: Draw A Card
  effects!: Effect[]

  location!: Area;

  manaCostPaid = false;

  resolve(): void {
    this._resolve();

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.CardEvent,
      {
        name: CardEvents.CardResolved,
        payload: {
          card: this
        }
      }
    )
  }

  _resolve(): void {
    throw new Error("Call the concrete implementation");
  }

  moveToGraveyard(): void {
    this.location = Area.Graveyard
  }

  moveToZone(area: Area): void {
    this.location = area
  }
}

export default Card
