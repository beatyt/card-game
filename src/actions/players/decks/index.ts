import ShuffleDecks from "../../../api/actions/decks/ShuffleDecks"
import EventTracker from "../../../api/events/EventTracker"
import Decks from "../../../game/players/decks/Decks"
import GameState from "../../../state/GameState"

export interface IDecks {
  state: () => Decks

  shuffle: (playerId?: string) => void
}

const state = {
  state: () => GameState.getInstance().data.playerData?.Decks
}

const actions = {
  shuffle(playerId?: string) {
    EventTracker.getInstance().dispatchStateModifyingEvent(new ShuffleDecks(playerId))
  },
  drawCard() { },
  drawCards(count: number) { }
}

export default {
  ...actions,
  ...state,
} as IDecks
