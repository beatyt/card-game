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

  DecksShuffled = "Decks:Shuffled",

  TurnProgression = "Turn:Progression",

  MoveCardToZone = "Card:Move",
  CardDraw = "Card:Draw",
}

enum CardEvents {
  CardDrawn = "Card:Drawn",
}

export type CardEventPayloads = CardDrawnEvent

export type CardDrawnEvent = {
  name: CardEvents.CardDrawn,
  payload: {
    playerId: string,
    card: ICard
  }
}

export { GameEvents, CardEvents }
