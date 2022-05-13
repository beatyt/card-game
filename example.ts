import Player from '@/player'
import { Game, GameEvents } from './src/index'

const players: Player[] = []

const listeners = [
  {
    event: GameEvents.GameInitialized,
    callback: () => {
      console.log('Hello world')
    }
  },
  {
    event: GameEvents.GameStarted,
    callback: () => {
      console.log('Hello world')
    }
  },
  {
    event: GameEvents.GameEnded,
    callback: () => {
      console.log('Good-bye world')
    }
  },
]

const game = new Game(players, listeners)

game.start()
game.end()

console.log(JSON.stringify(game))

game.rollback()

console.log(JSON.stringify(game))
