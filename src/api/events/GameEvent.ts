import IGameState, { IGameStateData } from "../../game/IGameState"

/**
 * Modifies game state by taking the current state
 * and returning new modifications to make
 */
interface GameEvent {
  name: string

  apply(gameState: IGameStateData): Partial<IGameStateData>
}

export default GameEvent
