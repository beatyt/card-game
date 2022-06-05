import { Payload } from './src/api/events'
import PlayerInitializer from './src/api/players'
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

  const { name, gameState, players } = d

  if (d.name === GameEvents.GameInitialized) {
    console.log(players.startingPlayer)
    Game.start()
    players.decks?.shuffle()
  }

  if (name === GameEvents.GameStarted) {
    // Game.end()
  }

  if (name === GameEvents.GameEnded) {
    // scoring?
    // Game.rollback()
  }

  if (name === GameEvents.DecksShuffled) {
    console.log('gameState', gameState.players?.players?.map(p => p.deck))
  }

  if (name === GameEvents.TurnProgression) {
    console.log('Turn progressed', gameState.turnPhase)

    // if (gameState.turnPhase !== TurnPhase.UpkeepStart) {
    //   Game.setPhase(TurnPhase.UpkeepStart) // ex: user clicks a button, fire this
    // }
  }

  if (name === GameEvents.MoveCardToZone) {
    console.log("A card moved")
    // Do animations or w/e
  }

  if (name === GameEvents.CardDraw) {
    console.log("A card was drawn")
  }
}

const listeners = [
  {
    event: 'GameEvent',
    callback: handler
  }
]

Game.init({ players, listeners })
