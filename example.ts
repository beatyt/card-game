import Player from '@/player'
import { Game } from './src/index'

const players: Player[] = [
  {
    name: 'Test Player',
    deck: [
      'card-1'
    ]
  }
]

const handler = (d: { name: string, game: Game } ) => {
  console.log('Hello world', d)

  const { game } = d

  if (d.name === 'Game:Initialized') {
    game.start()
  }

  if (d.name === 'Game:Started') {
    game.end()
    game.rollback()
  }
}

const listeners = [
  {
    event: 'GameEvent',
    callback: handler
  }
]

new Game(players, listeners)
