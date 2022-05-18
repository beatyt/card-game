import { Game, GamePhase } from "../../src/game"
import EventTracker from "../../src/events/EventTracker"
import GameStart from "../../src/events/repository/GameStart"
import GameInitialized from "../../src/events/repository/GameInitialized"
import { GameEvents } from "../../src/events"
import Library from "../../src/cards/Library"
import GameState from "../../src/game/GameState"
import Players from "../../src/player/Players"

describe('Events', () => {
  beforeEach(() => {
    const gameConfig = {
      players: [],
      library: new Library([]),
      listeners: []
    }

    const game = Game.init(gameConfig)
  })

  it('should add an event', () => {
    const events = new EventTracker()
    events.dispatch(new GameStart())
  
    expect(events.eventStack.length).toBe(1)
  })

  it('should remove an event', () => {
    const events = new EventTracker()
    events.dispatch(new GameStart())
    events.undoLast()
  
    expect(events.eventStack.length).toBe(0)
  })

  it('should update game state on undo', () => {
    const events = new EventTracker()

    events.dispatch(new GameInitialized(new Players([])))

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Initialized)
    expect(events.gameStates.length).toBe(1)

    events.dispatch(new GameStart())

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Started)
    expect(events.gameStates.length).toBe(2)

    events.undoLast()

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Initialized)
    expect(events.gameStates.length).toBe(1)
    expect(events.eventStack.length).toBe(1) // hmm
  })

  describe("Event Messages", () => {
    const events = new EventTracker([
      {
        event: GameEvents.GameInitialized,
        callback: () => {}
      }
    ])
  })
})
