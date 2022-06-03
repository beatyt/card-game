import GamePhase from "./GamePhase"
import Players from "../player/Players"
import TurnPhase from "../phases/TurnPhase"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  data: IGameStateData
}

export interface IGameStateData {
  gamePhase?: GamePhase,
  turnPhase?: TurnPhase,
  players?: Players | undefined
}

export default IGameState
