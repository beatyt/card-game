import { Game } from "@/game";
import Players from "@/player/Players";
import GameEvents from "./GameEvents";

interface Payload {
  name: GameEvents,
  game: Game,
  players: Players
}

export default Payload
