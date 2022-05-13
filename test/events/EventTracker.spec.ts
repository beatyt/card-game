import { Game, GameContext, GamePhase } from "../../src/game"
import EventTracker from "../../src/events/EventTracker"
import GameStart from "../../src/events/repository/GameStart"

describe('Events', () => {
  beforeEach(() => {
    new Game([])
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
    events.dispatch(new GameStart())

    expect(GameContext.game.gameState.gamePhase).toBe(GamePhase.Started)

    events.undoLast()

    expect(GameContext.game.gameState.gamePhase).toBe(GamePhase.Initialized)
    expect(events.gameStates.length).toBe(1)
    expect(events.eventStack.length).toBe(0)
  })
})
