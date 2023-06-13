import PlayCard from '../../api/actions/cards/PlayCard'
import DrawCards from '../../api/actions/decks/DrawCards'
import SelectRandomPlayer from '../../api/actions/players/SelectRandomPlayer'
import EventTracker from '../../api/events/EventTracker'
import Players from '../../game/players'
import GameState from '../../state/GameState'
import Decks, { IDecks } from './decks'
import Hands, { IHands } from './hands'

const playerFunctions = {
  selectRandomPlayer() {
    EventTracker.getInstance().dispatchStateModifyingEvent(new SelectRandomPlayer())
  },
  selectStartingPlayer() {
    // EventTracker.getInstance().dispatchStateModifyingEvent(new SelectStartingPlayer())
  },
  drawCard(playerId?: string) {
    EventTracker.getInstance().dispatchStateModifyingEvent(new DrawCards(1, playerId))
  },
  drawCards(num: number, playerId?: string,) {
    EventTracker.getInstance().dispatchStateModifyingEvent(new DrawCards(num, playerId))
  },
  playCard(
    cardId: string,
    playerId = Players.getInstance().currentTurnsPlayerId
  ) {
    EventTracker.getInstance().dispatchStateModifyingEvent(new PlayCard(cardId))
  },
  mulligan() { },
}

const state = {
  state: () => GameState.getInstance().data.playerData
}

const actions = {
  ...playerFunctions,
}

interface IPlayers {
  state: Function
  selectRandomPlayer: Function
  selectStartingPlayer: Function
  drawCard: Function
  drawCards: Function
  playCard: (
    cardId: string,
    playerId?: string,
  ) => void

  Decks: IDecks
  Hands: IHands
}

export default {
  /**
   * The state of the Decks
   */
  Decks,
  Hands,
  ...state,
  ...actions
} as IPlayers
