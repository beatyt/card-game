import EventTracker from "../../api/events/EventTracker";
import { EventTypes, TurnEvents } from "../../api/events/GameEvents";
import { TurnOrderStrategy } from "../../types/turns";
import Players from "../players";

export interface ITurnOrder {
  order: string[];
  strategy: TurnOrderStrategy;

  /**
   * Using the TurnOrderStrategy, it will setup the turns
   */
  computeTurnOrder(): void

  incrementTurn(): void
}

export class TurnOrder implements ITurnOrder {

  static instance: TurnOrder

  order = new Array<string>();
  currentIndex = 0;
  strategy!: TurnOrderStrategy

  init(
    strategy: TurnOrderStrategy,
    playerIds?: string[],
  ) {
    this.strategy = strategy;
    this.order = Players.getInstance().players.map(p => p.playerId);
    this.computeTurnOrder()
  }

  static getInstance() {
    if (!TurnOrder.instance) {
      TurnOrder.instance = new TurnOrder()
    }

    return TurnOrder.instance
  }

  /**
   * mutates the order variable
   */
  computeTurnOrder(): void {
    switch (this.strategy) {
      /**
       * Fisher-Yates shuffle
       */
      case (TurnOrderStrategy.Random): {
        console.time('Creating Turn Order');

        let randomIndex, temp, currentIndex;

        for (currentIndex = this.order.length - 1; currentIndex > 0; currentIndex--) {
          randomIndex = Math.floor(Math.random() * (currentIndex + 1));
          temp = this.order[currentIndex];
          this.order[currentIndex] = this.order[randomIndex];
          this.order[randomIndex] = temp;
        }

        console.timeEnd('Creating Turn Order');
        break;
      }

      default:
        throw new Error("Unknown strategy");
    }

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.TurnEvent,
      {
        name: TurnEvents.TurnOrderCreated,
        payload: {
          order: TurnOrder.getInstance().order,
        }
      }
    )
  }

  incrementTurn(): void {
    if (this.currentIndex === this.order.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  currentPlayer(): string {
    const currentPlayer = this.order[this.currentIndex];

    if (!currentPlayer) {
      throw new Error("No more players");
    }

    return currentPlayer
  }

  removePlayer(playerId: string): void {
    this.order = this.order.filter(p => p !== playerId)
  }
}
