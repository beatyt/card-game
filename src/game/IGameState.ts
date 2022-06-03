import GamePhase from "./GamePhase"
import Players from "./players/Players"
import TurnPhase from "../phases/TurnPhase"
import Zones from "../zones/Zones"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  data: IGameStateData
}

export interface IGameStateData {
  gamePhase?: GamePhase,
  turnPhase?: TurnPhase,
  players?: Players | undefined,
  zones?: Zones | undefined,
}

export default IGameState
