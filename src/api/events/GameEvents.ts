export enum EventTypes {
  GameEvent = 'GameEvent',
  CardEvent = 'CardEvent',
  PlayerEvent = 'PlayerEvent',
  TurnEvent = 'TurnEvent',
  PhaseEvent = 'PhaseEvent',
  RoundEvent = 'RoundEvent',
  DeckEvent = 'DeckEvent',
}

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

enum DeckEvents {
  DeckShuffled = "Deck:Shuffled",
  DecksShuffled = "Decks:Shuffled",
}

enum CardEvents {
  //
  CardDrawn = "Card:Drawn",
  ZoneChanged = "Zone:Changed",
  CardDiscarded = "Card:Discarded",
  ManaCostNeedsPaying = "Card:ManaCost:Needs:Paying",
  ManaCostPaid = "Card:ManaCost:Paid",
  ManaCostChanged = "Card:ManaCost:Changed",
  CardMovedToStack = "Card:Moved:To:Stack",
  CardPlayed = "Card:Played",
  CardResolved = "Card:Resolved",
}

/**
 *
 */
enum PhaseEvents {
  UpkeepStarted = "Phase:Upkeep:Started",
  UpkeepEnded = "Phase:Upkeep:Ended",
  DrawStarted = "Phase:Draw:Started",
  DrawEnded = "Phase:Draw:Ended",
  MainStarted = "Phase:Main:Started",
  MainEnded = "Phase:Main:Ended",
  CombatStarted = "Phase:Combat:Started",
  CombatEnded = "Phase:Combat:Ended",
  // more generic
  PhaseChanged = "PhaseChanged"
}

/**
 *
 */
enum TurnEvents {
  TurnChanged = "Turn:Changed",
  TurnOrderCreated = "Turn:Order:Created",
}

enum PlayerEvents {
  PlayerDamaged = "Player:Damaged",
  RandomPlayerSelected = "Player:RandomlySelected",
  StartingPlayerSelected = "Player:StartingPlayerSelected",
  PlayerLost = "Player:Lost",
}

enum PermanentEvents {
  PermanentDamaged = "Permanent:Damaged",
  PermanentTapped = "Permanent:Tapped",
}

export type NoticeEvent =
  GameEvents
  | CardEvents
  | PlayerEvents
  | DeckEvents
  | TurnEvents
  | PhaseEvents
  | PermanentEvents

export {
  GameEvents, CardEvents, PlayerEvents,
  DeckEvents, TurnEvents, PhaseEvents,
  PermanentEvents
}

