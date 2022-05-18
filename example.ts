import { Payload } from './src/events'
import PlayerInitializer from './src/player'
import { Game, GameEvents } from './src/index'

const players: PlayerInitializer[] = [
  {
    name: 'Test Player',
    deck: [
      '1',
      '1',
      '1',
      '1',
      '2'
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

  if (d.name === GameEvents.HandsShuffled) {
    console.log('gameState', gameState.players?.players.map(p => p.deck))
  }
}

const listeners = [
  {
    event: 'GameEvent',
    callback: handler
  }
]

Game.init({ players, listeners })
