/**
 * These are actions that the consumer can request to be performed
 *
 * They will recieve updates through a corresponding GameEvent
 */
enum GameActions {
  InitializeGame = "Game:Initialize",
  StartGame = "Game:Start",
  EndGame = "Game:End"
}

enum CardActions {
  DrawCard = "Card:Draw",
  DiscardCard = "Card:Discard",
  MoveCardToZone = "Card:Move",
  PlayCard = "Card:Play",

}

enum DeckActions {
  ShuffleDecks = "Decks:Shuffle",
}

enum TurnActions {
  StartTurn = "Turn:Start",
  ProgressTurn = "Turn:Progress",
  EndTurn = "Turn:End",
}

enum PhaseActions {
  ProgressPhase = "Phase:Progress",
  UpkeepStart = "UpkeepStart",
  StartMain = "StartMain",
  EndCombat = "EndCombat",
  EndMain = "EndMain",
  EndTurn = "EndTurn",
  EndUpkeep = "EndUpkeep",
  StartCombat = "StartCombat",
  StartDraw = "StartDraw",
  EndDraw = "EndDraw",
}

enum PlayerActions {
  SelectRandomPlayer = "Player:SelectRandom",
  SelectStartingPlayer = "Player:SelectStarting"
}

export type Actions = CardActions | PhaseActions | DeckActions | GameActions | PlayerActions | TurnActions

export {
  CardActions,
  PhaseActions,
  DeckActions,
  GameActions,
  PlayerActions,
  TurnActions,
};

