import Game from "../../src"
import EventTracker from "../../src/api/events/EventTracker"
import GameInitialized from "../../src/api/events/repository/game/GameInitialized"
import GameStart from "../../src/api/events/repository/game/GameStart"
import GamePhase from "../../src/api/phases/GamePhase"
import GameState from "../../src/state/GameState"
import { TurnOrderStrategy } from "../../src/types/turns"

describe('Events', () => {
  beforeEach(() => {
    const gameConfig = {
      players: [],
      listeners: [],
      turnOrderStrategy: TurnOrderStrategy.Random
    }

    Game.init(gameConfig)
  })

  it('should add an event', () => {
    const events = new EventTracker()
    events.dispatchStateModifyingEvent(new GameStart())

    expect(events.eventStack.length).toBe(1)
  })

  it('should remove an event', () => {
    const events = new EventTracker()
    events.dispatchStateModifyingEvent(new GameStart())
    events.undoLast()

    expect(events.eventStack.length).toBe(0)
  })

  it('should update game state on undo', () => {
    const events = new EventTracker()

    events.dispatchStateModifyingEvent(new GameInitialized())

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Initialized)
    expect(events.gameStates.length).toBe(1)

    events.dispatchStateModifyingEvent(new GameStart())

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Started)
    expect(events.gameStates.length).toBe(2)

    events.undoLast()

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Initialized)
    expect(events.gameStates.length).toBe(1)
    expect(events.eventStack.length).toBe(1) // hmm
  })

  describe("Event Messages", () => {
    const events = new EventTracker()
    events.init([])
  })
})
