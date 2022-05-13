import GameState from "@/game/GameState"

interface GameEvent {
  name: string

  apply(gameState: GameState): GameState
}

export default GameEvent
