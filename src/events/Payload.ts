import { IGameStateData } from "../game/IGameState";
import Players from "../player/Players";
import GameEvents from "./GameEvents";

interface Payload {
  name: GameEvents,
  gameState: IGameStateData,
  players: Players
}

export default Payload
