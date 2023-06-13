import ICard from "../../../../game/cards/ICard"
import { CardEvents } from "../../GameEvents"

interface CardMoveEvent {
  name: CardEvents.ZoneChanged,
  payload: {
    playerId: string,
    card: ICard,
  }
}

interface CardDrawnEvent {
  name: CardEvents.CardDrawn,
  payload: {
    playerId: string,
    cards: ICard[],
  }
}

interface CardDiscardedEvent {
  name: CardEvents.CardDiscarded,
  payload: {
    playerId: string,
    card: ICard,
  }
}

/**
 * If a card is updated in its toughness or mana cost or something, this gives a way to easily do a full refresh
 */
interface CardUpdated {
  name: CardEvents.CardDiscarded,
  payload: {
    playerId: string,
    card: ICard,
  }
}

interface ManaCostPaidEvent {
  name: CardEvents.ManaCostPaid,
  payload: {
    playerId: string,
    card: ICard,
  }
}

interface ManaCostChanged {
  name: CardEvents.ManaCostChanged,
  payload: {
    playerId: string,
    card: ICard
  }
}

interface CardPlayed {
  name: CardEvents.CardPlayed,
  payload: {
    card: ICard
  }
}

interface ManaCostNeedsPaying {
  name: CardEvents.ManaCostNeedsPaying,
  payload: {
    card: ICard
  }
}

interface CardMovedToStack {
  name: CardEvents.CardMovedToStack,
  payload: {
    card: ICard
  }
}

interface CardResolved {
  name: CardEvents.CardResolved,
  payload: {
    card: ICard
  }
}


export type CardEventPayloads =
  CardMoveEvent |
  CardDrawnEvent |
  CardDiscardedEvent |
  CardUpdated |
  ManaCostPaidEvent |
  ManaCostChanged |
  CardPlayed |
  ManaCostNeedsPaying |
  CardMovedToStack |
  CardResolved
