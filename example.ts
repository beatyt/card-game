import { Payload } from '@/events'
import Player from '@/player'
import { Game, GameEvents } from './src/index'

const players: Player[] = [
  {
    name: 'Test Player',
    deck: [
      'card-1',
      'card-2',
      'card-3',
    ]
  }
]

const handler = (d: Payload ) => {
  // console.log('Hello world', d)

  const { game, players } = d

  if (d.name === GameEvents.GameInitialized) {
    console.log(players.hands().shuffle())
    game.start()
  }

  if (d.name === GameEvents.GameStarted) {
    game.end()
  }

  if (d.name === GameEvents.GameEnded) {
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
