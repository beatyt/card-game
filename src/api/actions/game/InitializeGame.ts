import { GameConfig } from "../.."
import { GameActions } from "../../../actions/ActionNames"
import Cards from '../../../game/cards/cardLibrary'
import Players from "../../../game/players"
import { TurnOrder } from "../../../game/turns"
import GameState from "../../../state/GameState"
import IGameState from "../../../state/IGameState"
import EventTracker from "../../events/EventTracker"
import { EventTypes, GameEvents, PlayerEvents } from "../../events/GameEvents"
import GamePhase from "../../phases/GamePhase"
import GameAction from "../GameAction"

class InitializeGame implements GameAction {
  name = GameActions.InitializeGame

  constructor(readonly gameConfig: GameConfig) { }

  apply(gameState: IGameState): void {
    const { turnOrderStrategy, players: playerInitializer } = this.gameConfig

    gameState.commit({
      status: GamePhase.Initialized,
    }, this.name.toString())

    const players = Players.getInstance()
      .init(playerInitializer)
    TurnOrder.getInstance()
      .init(turnOrderStrategy, players.players.map(p => p.playerId))
    players.startingPlayer = Players.getInstance()
      .select(TurnOrder.getInstance().currentPlayer());

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.PlayerEvent,
      {
        name: PlayerEvents.StartingPlayerSelected,
        payload: {
          playerId: TurnOrder.getInstance().currentPlayer()
        }
      }
    )

    // translate initializers to players
    GameState.getInstance().commit({
      playerData: players,
      cardData: { ...Cards },
      turnOrder: {
        strategy: turnOrderStrategy,
        order: TurnOrder.getInstance().order
      },
    })

    EventTracker.getInstance().dispatchNotifyingEvent(
      EventTypes.GameEvent,
      {
        name: GameEvents.GameInitialized,
        payload: {}
      })
  }
}

export default InitializeGame
