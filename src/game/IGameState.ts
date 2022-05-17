import GamePhase from "./GamePhase"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  data: IGameStateData
}

export interface IGameStateData {
  gamePhase?: GamePhase
}

export default IGameState
