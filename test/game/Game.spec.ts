import Game from "../../src/game/Game"
import GamePhase from "../../src/game/GamePhase"

describe('Game', () => {
  it('should initialize', () => {
    const game = new Game([])
  
    expect(game.gameState.gamePhase).toBe(GamePhase.Initialized)
  })

  it('should start', () => {
    const game = new Game([])
    game.start()
  
    expect(game.gameState.gamePhase).toBe(GamePhase.Started)
  })

  it('should end', () => {
    const game = new Game([])
    game.start()
    game.end()
  
    expect(game.gameState.gamePhase).toBe(GamePhase.Ended)
  })
})