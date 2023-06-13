
import { CardActions } from "../../../actions/ActionNames"
import Zone from "../../../game/board/zones/Zone"
import ICard from "../../../game/cards/ICard"
import IGameState from "../../../state/IGameState"
import { Area } from "../../../types/zones/Area"
import GameAction from "../GameAction"

interface EventData {
  card: ICard,
  destinationZone: Area
}

class MoveCardToZone implements GameAction {
  name = CardActions.MoveCardToZone

  constructor(readonly data: EventData) { }

  /**
   * Want to know which card moved, and which zones its moving from and to
   * 
   * @param gameState 
   */
  apply(gameState: IGameState): void {
    const { card, destinationZone: zone } = this.data
    const { originalOwnerId } = card

    card.location = zone;

    gameState.commit({ cardData: [card] }, this.name);
  }
}

export default MoveCardToZone
