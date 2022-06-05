enum GameEvents {
  Rollback = "Rollback",

  GameInitialized = "Game:Initialized",
  GameStarted = "Game:Started",
  GameEnded = "Game:Ended",

  DecksShuffled = "Decks:Shuffled",

  TurnProgression = "Turn:Progression",

  MoveCardToZone = "Card:Move",
  CardDraw = "Card:Draw",
  CardDrawn = "Card:Drawn",
}

export default GameEvents
