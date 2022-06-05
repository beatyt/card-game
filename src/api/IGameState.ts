import Players from "../api/players/Players"
import TurnPhase from "../api/phases/TurnPhase"
import Zones from "./zones/Zones"
import GamePhase from "./GamePhase"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  data: IGameStateData
}

export interface IGameStateData {
  gamePhase?: GamePhase,
  turnPhase?: TurnPhase,
  players?: Players,
  zones?: Zones,
}

export default IGameState
