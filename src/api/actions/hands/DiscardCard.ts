import { CardActions } from "../../../actions/ActionNames";
import Players from "../../../game/players";
import IGameState from "../../../state/IGameState";
import { CardEvents } from "../../events/GameEvents";
import { GameAction } from "../../events/RequestEvent";

/**
 * Shuffle the decks for all players
 */
class DiscardCard implements GameAction {
  name = CardActions.DiscardCard

  constructor(
    private readonly playerId: string,
    private readonly cardId: string) { }

  apply(gameState: IGameState): void {
    const player = Players.getInstance().select(this.playerId)

    player.hand.discard(this.cardId);

    gameState.commit({ playerData: Players.getInstance() }, this.name)

    const r = {
      event: CardEvents.CardDiscarded,
      payload: {
        cardId: this.cardId,
      }
    }
  }
}

export default DiscardCard
