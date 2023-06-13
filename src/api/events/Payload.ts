
import { IGameStateData } from "../../state/IGameState";
import { GameEvents } from "./GameEvents";

interface Payload {
  name: GameEvents,
  payload: any,
  gameState: IGameStateData
}

export default Payload
