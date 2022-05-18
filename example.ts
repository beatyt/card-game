import Library from './src/cards/Library'
import { Payload } from './src/events'
import Player from './src/player'
import { Game, GameEvents } from './src/index'

const players: Player[] = [
  {
    name: 'Test Player',
    deck: [
      '1'
    ]
  }
]

const handler = (d: Payload) => {
  // console.log('Hello world', d)

  const { gameState, players } = d

  if (d.name === GameEvents.GameInitialized) {
    console.log(players.startingPlayer)
    players.hands().shuffle()
    Game.start()
  }

  if (d.name === GameEvents.GameStarted) {
    Game.end()
  }

  if (d.name === GameEvents.GameEnded) {
    Game.rollback()
  }
}

const listeners = [
  {
    event: 'GameEvent',
    callback: handler
  }
]

Game.init({ players, listeners })
