import GamePhase from "@api/GamePhase";
import IGameState, { IGameStateData } from "./IGameState";

class GameState implements IGameState {
  static instance: GameState
  data: IGameStateData

  private constructor() {
    this.data = {
      gamePhase: GamePhase.Initializing
    }
  }

  static getInstance() {
    if (!GameState.instance) {
      GameState.instance = new GameState()
    }

    return GameState.instance
  }
}

export default GameState
