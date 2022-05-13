import GamePhase from "./GamePhase"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface GameState {
  gamePhase?: GamePhase
}

export default GameState
