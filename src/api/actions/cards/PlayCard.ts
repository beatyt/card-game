import { CardActions } from "../../../actions/ActionNames";
import CardTranslator from "../../../game/cards/CardTranslator";
import Players from "../../../game/players";
import IGameState from "../../../state/IGameState";
import EventTracker from "../../events/EventTracker";
import { CardEvents, EventTypes } from "../../events/GameEvents";
import { GameAction } from "../../events/RequestEvent";

class PlayCard implements GameAction {
  name = CardActions.PlayCard

  constructor(
    readonly cardId: string
  ) { }

  apply(gameState: IGameState): void {
    gameState.commit({ playerData: Players.getInstance() }, this.name)

    const card = CardTranslator.getInstance().lookupCard(this.cardId);

    if (!card) {
      throw new Error()
    }

    if (!card.manaCostPaid) {
      EventTracker.getInstance().dispatchNotifyingEvent(
        EventTypes.CardEvent,
        {
          name: CardEvents.ManaCostNeedsPaying,
          payload: {
            card,
          }
        })

      return;
    }

    // move card to stack
    // let counterspells be moved onto stack
    // move to field if permanent, graveyard if spell

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.DeckEvent,
      {
        name: CardEvents.CardPlayed,
        payload: {
          card,
        }
      })

    return;
  }
}

export default PlayCard
