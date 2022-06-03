import { Game, GamePhase } from "../../src/api"
import EventTracker from "../../src/api/events/EventTracker"
import GameStart from "../../src/api/events/repository/game/GameStart"
import GameInitialized from "../../src/api/events/repository/game/GameInitialized"
import { GameEvents } from "../../src/api/events"
import Library from "../../src/game/cards/Library"
import GameState from "../../src/api/GameState"
import Players from "../../src/api/players/Players"

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

    events.dispatch(new GameInitialized())

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
    const events = new EventTracker()
    events.init()
  })
})
