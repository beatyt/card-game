import ICard from "../cards/ICard"

export type EventTypes = 'GameEvent' | 'CardEvent'

/**
 * GameEvents are things that modify the entire state of the game
 * and dispatch updates to the entire gameState
 */
enum GameEvents {
  Rollback = "Rollback",

  GameInitialized = "Game:Initialized",
  GameStarted = "Game:Started",
  GameEnded = "Game:Ended",

  TurnProgression = "Turn:Progression",
}

enum CardEvents {
  CardDrawn = "Card:Drawn",
  MoveCardToZone = "Card:Move",
  CardDraw = "Card:Draw",
  DecksShuffled = "Decks:Shuffled",
}

export type CardEventPayloads = CardDrawnEvent

export type CardDrawnEvent = {
  name: CardEvents,
  payload: {
    playerId: string,
    card: ICard
  }
}

export { GameEvents, CardEvents }
