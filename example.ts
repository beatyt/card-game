import { Payload } from './src/api/events'
import { CardEventPayloads, CardEvents } from './src/api/events/GameEvents'
import PlayerInitializer from './src/api/players'
import { Game, GameEvents } from './src/index'
import { Listener } from './src/types/Listener'

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



  if (name === GameEvents.TurnProgression) {
    console.log('Turn progressed', gameState.turnPhase)

    // if (gameState.turnPhase !== TurnPhase.UpkeepStart) {
    //   Game.setPhase(TurnPhase.UpkeepStart) // ex: user clicks a button, fire this
    // }
  }
}

const cardEventHandler = (d: CardEventPayloads) => {
  console.log(d)

  if (d.name === CardEvents.CardDrawn) {
    console.log(d.payload)
  }

  if (d.name === CardEvents.DecksShuffled) {
    console.log(d.payload)
  }

  if (d.name === CardEvents.MoveCardToZone) {
    console.log("A card moved")
    // Do animations or w/e
  }
}

const listeners: Listener[] = [
  {
    event: 'GameEvent',
    callback: handler
  },
  {
    event: 'CardEvent',
    callback: cardEventHandler
  }
]

Game.init({ players, listeners })
