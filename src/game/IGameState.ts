import Deck from "../deck/Deck"
import ICard from "../cards/ICard"
import GamePhase from "./GamePhase"
import Players from "../player/Players"

/**
 * All updates to GameState must occur through dispatching actions
 */
interface IGameState {
  data: IGameStateData
}

export interface IGameStateData {
  gamePhase?: GamePhase
  players?: Players | undefined
}

export default IGameState
