import { writeFileSync } from 'fs';
import GameAction from "../api/actions/GameAction";
import GamePhase from "../api/phases/GamePhase";
import IGameState, { IGameStateData } from "./IGameState";

class GameState implements IGameState {
  static instance: GameState
  data: IGameStateData
  readonly eventStack: GameAction[] = []
  readonly gameStates: { label?: string, data: IGameStateData }[] = []

  private constructor() {
    this.data = {
      status: GamePhase.Initializing
    }
  }

  static getInstance() {
    if (!GameState.instance) {
      GameState.instance = new GameState()
    }

    return GameState.instance
  }

  /**
   * TODO: Get the diff and save only that?
   * 
   * @param delta 
   */
  commit(delta: Partial<IGameStateData>, tag?: string): void {
    const currentState = GameState.getInstance()

    // should i snapshot the new state, or wait for next snapshot call?
    this.gameStates.push({ label: tag, data: delta })

    // update game w/ new state
    GameState.getInstance().data = {
      ...currentState.data,
      ...delta
    }

    console.debug('Size of stack of game states', JSON.stringify(this.gameStates).length, 'bytes')
    writeFileSync('gameStates.json', JSON.stringify({
      eventStack: this.eventStack,
      gameStates: this.gameStates.map((v, i) => ({ [i]: v }))
    }))
  }

  rollback(): void {
    // undo the last event
    this.eventStack.pop()
    this.gameStates.pop()

    // restores state from the previous
    const lastState = this.gameStates[this.gameStates.length - 1]
    GameState.getInstance().data = lastState.data

    writeFileSync('gameStates.json', JSON.stringify({
      eventStack: this.eventStack,
      gameStates: this.gameStates.map((v, i) => ({ [i]: v }))
    }))
  }
}

export default GameState
