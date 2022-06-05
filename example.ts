import { Payload } from './src/api/events'
import PlayerInitializer from './src/api/players'
import { Game, GameEvents } from './src/index'

const players: PlayerInitializer[] = [
  {
    playerId: '1',
    name: 'Test Player',
    deck: {
      name: 'my-deck',
      cardUris: [
        '1',
        '1',
        '1',
        '1',
        '2',
        '2',
        '2',
        '2',
      ]
    }
  }
]

const handler = (d: Payload) => {
  const { name, gameState } = d
  const { playerData, gamePhase, turnPhase, zones } = gameState

  const players = playerData?.players
  const hands = playerData?.hands
  const decks = playerData?.decks

  const handCards = hands?.map(h => h.cards)
  const deckCards = decks?.map(h => h.cards)

  if (d.name === GameEvents.GameInitialized) {
    console.log('startingPlayer', playerData?.startingPlayer)
    Game.start()
    Game.Decks.shuffle()
    Game.Players.drawCards(7)
  }

  if (name === GameEvents.GameStarted) {
    // Game.end()
  }

  if (name === GameEvents.GameEnded) {
    // scoring?
    // Game.rollback()
  }

  if (name === GameEvents.DecksShuffled) {
    console.log('gameState', gameState.playerData?.players?.map(p => p.deck))
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

  if (name === GameEvents.CardDrawn) {
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
