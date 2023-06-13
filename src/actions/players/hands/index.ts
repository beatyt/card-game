import GameState from "../../../state/GameState"

export interface IHands {

  /**
   * Move a card from hand to field
   * 
   * @param cardId 
   */
  playCard(cardId: string, playerId: string): void

  /**
  * Moves card from hand to graveyard zone
  * 
  * @param cardId 
  * @param playerId the player id for owning hand
  */
  discardCard(cardId: string, playerId: string): void

  /**
  * Moves card from hand to graveyard zone
  * 
  * @param playerId hand of player
  */
  discardRandomCard(playerId: string): void

  /**
 * Moves card from hand to graveyard zone
 * 
 * @param cardIds 
 */
  discardCards(cardIds: string[], playerId: string): void
}

const actions = {
  discardCard(cardId: string) { },
  discardRandomCard() { },
  discardCards(cardIds: string[]) { },
  playCard(cardId: string) { }
}

const state = {
  state: () => GameState.getInstance().data.playerData?.hands
}

export default {
  ...actions,
  ...state,
} as IHands
