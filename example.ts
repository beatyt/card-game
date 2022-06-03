import { Payload } from './src/api/events'
import PlayerInitializer from './src/api/players'
import { Game, GameEvents } from './src/index'
import TurnPhase from './src/api/phases/TurnPhase'

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
    players.decks.shuffle()
    Game.start()
  }

  if (d.name === GameEvents.GameStarted) {
    Game.end()
  }

  if (d.name === GameEvents.GameEnded) {
    // scoring?
    Game.rollback()
  }

  if (d.name === GameEvents.DecksShuffled) {
    console.log('gameState', gameState.players?.players.map(p => p.deck))
  }

  if (d.name === GameEvents.TurnProgression) {
    console.log('Turn progressed', d.gameState.turnPhase)

    if (d.gameState.turnPhase !== TurnPhase.UpkeepStart) {
      Game.setPhase(TurnPhase.UpkeepStart) // ex: user clicks a button, fire this
    }
  }

  if (d.name === GameEvents.MoveCardToZone) {
    console.log("A card moved")
    // Do animations or w/e
  }
}

const listeners = [
  {
    event: 'GameEvent',
    callback: handler
  }
]

Game.init({ players, listeners })
