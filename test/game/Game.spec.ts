import Library from "../../src/game/cards/Library"
import Game from "../../src/api/Game"
import GameState from "../../src/api/GameState"
import GamePhase from "../../src/api/GamePhase"

describe('Game', () => {
  const gameConfig = {
    players: [],
    library: new Library([]),
    listeners: []
  }

  it('should initialize', () => {
    Game.init(gameConfig)

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Initialized)
  })

  it('should start', () => {
    Game.init(gameConfig)
    Game.start()

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Started)
  })

  it('should end', () => {
    Game.init(gameConfig)
    Game.start()
    Game.end()

    expect(GameState.getInstance().data.gamePhase).toBe(GamePhase.Ended)
  })
})
