import { DeckActions } from "../../../actions/ActionNames";
import Players from "../../../game/players";
import IGameState from "../../../state/IGameState";
import EventTracker from "../../events/EventTracker";
import { DeckEvents, EventTypes } from "../../events/GameEvents";
import GameAction from "../GameAction";

/**
 * Shuffle the decks for all players
 */
class ShuffleDecks implements GameAction {
  readonly name = DeckActions.ShuffleDecks
  private readonly eventTracker = EventTracker.getInstance()

  constructor(
    private readonly playerId?: string
  ) { }

  apply(gameState: IGameState): void {
    console.debug('players for shuffle', gameState)

    if (!gameState.data.playerData?.players) {
      throw new Error("Called w/o having players")
    }

    if (this.playerId) {
      const { playerId, cards } = Players.getInstance().select(this.playerId).shuffleDeck()

      gameState.commit({ playerData: Players.getInstance() }, this.name)

      this.eventTracker.dispatchNotifyingEvent(
        EventTypes.DeckEvent,
        {
          name: DeckEvents.DeckShuffled,
          payload: {
            playerId: this.playerId
          }
        });

      return;
    }

    const arr = Players.getInstance().Decks.shuffleCards()

    gameState.commit({ playerData: Players.getInstance() }, this.name)

    arr.forEach(({ playerId, cards }) => {
      this.eventTracker.dispatchNotifyingEvent(
        EventTypes.DeckEvent,
        {
          name: DeckEvents.DeckShuffled,
          payload: {
            playerId: playerId
          }
        });
    })

    this.eventTracker.dispatchNotifyingEvent(
      EventTypes.DeckEvent,
      {
        name: DeckEvents.DecksShuffled,
        payload: {}
      });
  }
}

export default ShuffleDecks
