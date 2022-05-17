import IGameState, { IGameStateData } from "../game/IGameState"

interface GameEvent {
  name: string

  apply(gameState: IGameStateData): Partial<IGameStateData>
}

export default GameEvent
