import Player from '../player'
import EventTracker from "../events/EventTracker"
import GameStart from "../events/repository/GameStart"
import GameState from "./GameState"
import GameContext from "./GameContext"
import GameEnd from "../events/repository/GameEnd"
import GameInitialized from '../events/repository/GameInitialized'
import Players from '../player/Players'

class Game {
  events: EventTracker
  gameState: GameState = {}
  turn: number

  constructor(
    private readonly players: Player[],
    private readonly listeners?: { event: string, callback: (...args: any[]) => void }[]
  ) {
    this.events = new EventTracker(listeners || [])
    this.turn = 0

    GameContext.game = this
    GameContext.players = new Players(players)

    this.events.dispatch(new GameInitialized())
  }

  /**
   * Starting player
   * Draw cards
   * Mulligans
   * Initialize stuff
   */
  start() {
    this.events.dispatch(new GameStart())
  }

  rollback() {
    this.events.undoLast()
  }

  end() {
    this.events.dispatch(new GameEnd())
    // this.gameState = GamePhase.Ended
  }

  progressTurn() {
    this.turn++
  }

  progressPhase() {
    // any end of phase rules
    // this.events.dispatch('phase:end')
    // fire off card rules that trigger on this phase
  }
}

export default Game
