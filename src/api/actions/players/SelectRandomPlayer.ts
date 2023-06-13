import { PlayerActions } from "../../../actions/ActionNames";
import Players, { IPlayer } from "../../../game/players";
import IGameState from "../../../state/IGameState";
import EventTracker from "../../events/EventTracker";
import { EventTypes, PlayerEvents } from "../../events/GameEvents";
import GameAction from "../GameAction";

/**
 * Shuffle the decks for all players
 */
class SelectRandomPlayer implements GameAction {
  name = PlayerActions.SelectRandomPlayer

  apply(gameState: IGameState): void {
    if (!gameState.data.playerData?.players) {
      throw new Error("Called w/o having players")
    }

    const randomlySelectedPlayer = Players.getInstance().selectRandomPlayer() as IPlayer

    gameState.commit({
      randomlySelectedPlayer
    })

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PlayerEvent,
      {
        name: PlayerEvents.RandomPlayerSelected,
        payload: {
          playerId: randomlySelectedPlayer.playerId
        }
      })
  }
}

export default SelectRandomPlayer
