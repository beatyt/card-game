import { CardActions } from "../../../actions/ActionNames";
import Players from "../../../game/players";
import IGameState from "../../../state/IGameState";
import EventTracker from "../../events/EventTracker";
import { CardEvents, EventTypes } from "../../events/GameEvents";
import { GameAction } from "../../events/RequestEvent";

class DrawCards implements GameAction {
  name = CardActions.DrawCard

  constructor(
    readonly num: number = 1,
    readonly playerId?: string,
  ) { }

  apply(gameState: IGameState): void {
    if (this.playerId) {
      const cards = Players.getInstance()
        .select(this.playerId)
        .drawCards(this.num)

      gameState.commit({ playerData: Players.getInstance() }, this.name)

      EventTracker.getInstance().dispatchNotifyingEvent(
        EventTypes.DeckEvent,
        {
          name: CardEvents.CardDrawn,
          payload: {
            playerId: this.playerId,
            cards
          }
        })

      return;
    }

    const arr = Players.getInstance().drawCards(this.num)

    gameState.commit({ playerData: Players.getInstance() }, this.name)

    arr.forEach(({ playerId, cards }) => {
      EventTracker.getInstance().dispatchNotifyingEvent(
        EventTypes.DeckEvent,
        {
          name: CardEvents.CardDrawn,
          payload: {
            playerId,
            cards: cards
          }
        })
    })
  }
}

export default DrawCards
