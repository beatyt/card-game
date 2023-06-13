import { PlayerActions } from "../../../actions/ActionNames"
import Players from "../../../game/players"
import { TurnOrder } from "../../../game/turns"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, PlayerEvents } from "../../events/GameEvents"
import GameAction from "../GameAction"

/**
 * Shuffle the decks for all players
 */
class SelectStartingPlayer implements GameAction {
  name = PlayerActions.SelectStartingPlayer

  apply(gameState: IGameState): void {
    if (!gameState.data.playerData?.players) {
      throw new Error("Called w/o having players")
    }

    // TODO: Update this to pull from TurnOrder
    const currentPlayersTurn = TurnOrder.getInstance()
      .currentPlayer()
    const currentPlayer = Players.getInstance()
      .select(currentPlayersTurn)

    gameState.commit({
      playerData: {
        startingPlayer: currentPlayer
      }
    }, this.name.toString())

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PlayerEvent,
      {
        name: PlayerEvents.StartingPlayerSelected,
        payload: {
          playerId: currentPlayer.playerId
        }
      })
  }
}

export default SelectStartingPlayer
