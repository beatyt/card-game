import { IGameStateData } from "../IGameState";
import GameEvents from "./GameEvents";

interface Payload {
  name: GameEvents,
  gameState: IGameStateData
}

export default Payload
