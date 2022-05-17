import IGameState from "@/gameIGameState";
import Players from "../player/Players";
import GameEvents from "./GameEvents";

interface Payload {
  name: GameEvents,
  gameState: IGameState,
  players: Players
}

export default Payload
