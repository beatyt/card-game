# Details

Date : 2023-02-22 14:20:06

Directory c:\\projects\\card-game

Total : 96 files,  10109 codes, 461 comments, 615 blanks, all 11185 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [README.md](/README.md) | Markdown | 10 | 0 | 3 | 13 |
| [example.ts](/example.ts) | TypeScript | 131 | 7 | 24 | 162 |
| [jest.config.ts](/jest.config.ts) | TypeScript | 8 | 137 | 55 | 200 |
| [package-lock.json](/package-lock.json) | JSON | 8,326 | 0 | 1 | 8,327 |
| [package.json](/package.json) | JSON | 16 | 0 | 1 | 17 |
| [src/actions/ActionNames.ts](/src/actions/ActionNames.ts) | TypeScript | 9 | 5 | 4 | 18 |
| [src/actions/index.ts](/src/actions/index.ts) | TypeScript | 41 | 7 | 11 | 59 |
| [src/actions/players/decks/index.ts](/src/actions/players/decks/index.ts) | TypeScript | 21 | 0 | 6 | 27 |
| [src/actions/players/hands/index.ts](/src/actions/players/hands/index.ts) | TypeScript | 20 | 21 | 9 | 50 |
| [src/actions/players/index.ts](/src/actions/players/index.ts) | TypeScript | 51 | 3 | 7 | 61 |
| [src/actions/turns/index.ts](/src/actions/turns/index.ts) | TypeScript | 15 | 0 | 5 | 20 |
| [src/api/actions/cards/index.ts](/src/api/actions/cards/index.ts) | TypeScript | 51 | 3 | 8 | 62 |
| [src/api/actions/decks/DrawCards.ts](/src/api/actions/decks/DrawCards.ts) | TypeScript | 44 | 0 | 11 | 55 |
| [src/api/actions/decks/ShuffleDecks.ts](/src/api/actions/decks/ShuffleDecks.ts) | TypeScript | 40 | 3 | 13 | 56 |
| [src/api/actions/decks/index.ts](/src/api/actions/decks/index.ts) | TypeScript | 9 | 0 | 3 | 12 |
| [src/api/actions/hands/DiscardCard.ts](/src/api/actions/hands/DiscardCard.ts) | TypeScript | 23 | 3 | 8 | 34 |
| [src/api/actions/index.ts](/src/api/actions/index.ts) | TypeScript | 4 | 0 | 2 | 6 |
| [src/api/actions/players/index.ts](/src/api/actions/players/index.ts) | TypeScript | 23 | 0 | 5 | 28 |
| [src/api/actions/turns/index.ts](/src/api/actions/turns/index.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/api/events/EventTracker.ts](/src/api/events/EventTracker.ts) | TypeScript | 50 | 13 | 15 | 78 |
| [src/api/events/GameEvent.ts](/src/api/events/GameEvent.ts) | TypeScript | 8 | 9 | 5 | 22 |
| [src/api/events/GameEvents.ts](/src/api/events/GameEvents.ts) | TypeScript | 31 | 8 | 13 | 52 |
| [src/api/events/IEventTracker.ts](/src/api/events/IEventTracker.ts) | TypeScript | 10 | 0 | 7 | 17 |
| [src/api/events/InternalListener.ts](/src/api/events/InternalListener.ts) | TypeScript | 24 | 5 | 7 | 36 |
| [src/api/events/Payload.ts](/src/api/events/Payload.ts) | TypeScript | 7 | 0 | 4 | 11 |
| [src/api/events/RequestEvent.ts](/src/api/events/RequestEvent.ts) | TypeScript | 6 | 5 | 3 | 14 |
| [src/api/events/index.ts](/src/api/events/index.ts) | TypeScript | 6 | 0 | 2 | 8 |
| [src/api/events/repository/game/GameEnd.ts](/src/api/events/repository/game/GameEnd.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/game/GameInitialized.ts](/src/api/events/repository/game/GameInitialized.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [src/api/events/repository/game/GameStart.ts](/src/api/events/repository/game/GameStart.ts) | TypeScript | 15 | 0 | 4 | 19 |
| [src/api/events/repository/index.ts](/src/api/events/repository/index.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [src/api/events/repository/phases/BeginUpkeep.ts](/src/api/events/repository/phases/BeginUpkeep.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/EndCombatPhase.ts](/src/api/events/repository/phases/EndCombatPhase.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/EndMainPhase.ts](/src/api/events/repository/phases/EndMainPhase.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/EndTurn.ts](/src/api/events/repository/phases/EndTurn.ts) | TypeScript | 17 | 1 | 5 | 23 |
| [src/api/events/repository/phases/EndUpkeep.ts](/src/api/events/repository/phases/EndUpkeep.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/StartCombatPhase.ts](/src/api/events/repository/phases/StartCombatPhase.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/StartDrawPhase.ts](/src/api/events/repository/phases/StartDrawPhase.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/StartMainPhase.ts](/src/api/events/repository/phases/StartMainPhase.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/phases/TurnStart.ts](/src/api/events/repository/phases/TurnStart.ts) | TypeScript | 13 | 0 | 4 | 17 |
| [src/api/events/repository/players/SelectRandomPlayer.ts](/src/api/events/repository/players/SelectRandomPlayer.ts) | TypeScript | 25 | 3 | 7 | 35 |
| [src/api/events/repository/players/SelectStartingPlayer.ts](/src/api/events/repository/players/SelectStartingPlayer.ts) | TypeScript | 27 | 3 | 7 | 37 |
| [src/api/events/repository/turns/ProgressTurn.ts](/src/api/events/repository/turns/ProgressTurn.ts) | TypeScript | 13 | 0 | 6 | 19 |
| [src/api/events/repository/zones/MoveCardToZone.ts](/src/api/events/repository/zones/MoveCardToZone.ts) | TypeScript | 20 | 5 | 9 | 34 |
| [src/api/events/repository/zones/ZoneChangeEvent.ts](/src/api/events/repository/zones/ZoneChangeEvent.ts) | TypeScript | 7 | 0 | 4 | 11 |
| [src/api/index.ts](/src/api/index.ts) | TypeScript | 46 | 11 | 10 | 67 |
| [src/api/phases/GamePhase.ts](/src/api/phases/GamePhase.ts) | TypeScript | 10 | 12 | 2 | 24 |
| [src/api/phases/TurnPhase.ts](/src/api/phases/TurnPhase.ts) | TypeScript | 13 | 3 | 2 | 18 |
| [src/api/players/PlayerInitializer.ts](/src/api/players/PlayerInitializer.ts) | TypeScript | 9 | 3 | 3 | 15 |
| [src/cards/CardLink.ts](/src/cards/CardLink.ts) | TypeScript | 4 | 3 | 2 | 9 |
| [src/game/board/Board.ts](/src/game/board/Board.ts) | TypeScript | 15 | 0 | 5 | 20 |
| [src/game/board/index.ts](/src/game/board/index.ts) | TypeScript | 15 | 0 | 5 | 20 |
| [src/game/board/zones/Zone.ts](/src/game/board/zones/Zone.ts) | TypeScript | 20 | 3 | 4 | 27 |
| [src/game/board/zones/Zones.ts](/src/game/board/zones/Zones.ts) | TypeScript | 45 | 6 | 16 | 67 |
| [src/game/board/zones/index.ts](/src/game/board/zones/index.ts) | TypeScript | 6 | 0 | 2 | 8 |
| [src/game/cards/Ability.ts](/src/game/cards/Ability.ts) | TypeScript | 3 | 0 | 3 | 6 |
| [src/game/cards/Card.ts](/src/game/cards/Card.ts) | TypeScript | 28 | 7 | 16 | 51 |
| [src/game/cards/CardTranslator.ts](/src/game/cards/CardTranslator.ts) | TypeScript | 40 | 0 | 16 | 56 |
| [src/game/cards/CardType.ts](/src/game/cards/CardType.ts) | TypeScript | 18 | 3 | 4 | 25 |
| [src/game/cards/CardValue.ts](/src/game/cards/CardValue.ts) | TypeScript | 16 | 8 | 5 | 29 |
| [src/game/cards/Color.ts](/src/game/cards/Color.ts) | TypeScript | 2 | 0 | 2 | 4 |
| [src/game/cards/Effect.ts](/src/game/cards/Effect.ts) | TypeScript | 5 | 2 | 4 | 11 |
| [src/game/cards/ICard.ts](/src/game/cards/ICard.ts) | TypeScript | 22 | 4 | 15 | 41 |
| [src/game/cards/Library.ts](/src/game/cards/Library.ts) | TypeScript | 22 | 3 | 7 | 32 |
| [src/game/cards/ManaCost.ts](/src/game/cards/ManaCost.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [src/game/cards/SubType.ts](/src/game/cards/SubType.ts) | TypeScript | 7 | 0 | 2 | 9 |
| [src/game/cards/abilities/AbstractAbility.ts](/src/game/cards/abilities/AbstractAbility.ts) | TypeScript | 7 | 0 | 2 | 9 |
| [src/game/cards/abilities/DrawCard.ts](/src/game/cards/abilities/DrawCard.ts) | TypeScript | 3 | 0 | 2 | 5 |
| [src/game/cards/abilities/ITriggeredAbility.ts](/src/game/cards/abilities/ITriggeredAbility.ts) | TypeScript | 5 | 3 | 2 | 10 |
| [src/game/cards/abilities/TriggeredAbility.ts](/src/game/cards/abilities/TriggeredAbility.ts) | TypeScript | 9 | 0 | 3 | 12 |
| [src/game/cards/abilities/index.ts](/src/game/cards/abilities/index.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [src/game/cards/abilities/triggered/TriggeredDrawCard.ts](/src/game/cards/abilities/triggered/TriggeredDrawCard.ts) | TypeScript | 9 | 0 | 2 | 11 |
| [src/game/cards/cardLibrary/Fireball.ts](/src/game/cards/cardLibrary/Fireball.ts) | TypeScript | 18 | 0 | 4 | 22 |
| [src/game/cards/cardLibrary/One.ts](/src/game/cards/cardLibrary/One.ts) | TypeScript | 22 | 0 | 4 | 26 |
| [src/game/cards/cardLibrary/Zero.ts](/src/game/cards/cardLibrary/Zero.ts) | TypeScript | 22 | 0 | 4 | 26 |
| [src/game/cards/cardLibrary/index.ts](/src/game/cards/cardLibrary/index.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [src/game/cards/index.ts](/src/game/cards/index.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [src/game/phases/PhaseOrder.ts](/src/game/phases/PhaseOrder.ts) | TypeScript | 41 | 0 | 8 | 49 |
| [src/game/players/Player.ts](/src/game/players/Player.ts) | TypeScript | 35 | 6 | 12 | 53 |
| [src/game/players/decks/Deck.ts](/src/game/players/decks/Deck.ts) | TypeScript | 36 | 7 | 16 | 59 |
| [src/game/players/decks/Decks.ts](/src/game/players/decks/Decks.ts) | TypeScript | 12 | 6 | 4 | 22 |
| [src/game/players/decks/IDeck.ts](/src/game/players/decks/IDeck.ts) | TypeScript | 8 | 0 | 5 | 13 |
| [src/game/players/hands/Hand.ts](/src/game/players/hands/Hand.ts) | TypeScript | 15 | 0 | 4 | 19 |
| [src/game/players/hands/Hands.ts](/src/game/players/hands/Hands.ts) | TypeScript | 7 | 3 | 3 | 13 |
| [src/game/players/hands/index.ts](/src/game/players/hands/index.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [src/game/players/index.ts](/src/game/players/index.ts) | TypeScript | 50 | 5 | 18 | 73 |
| [src/index.ts](/src/index.ts) | TypeScript | 15 | 5 | 5 | 25 |
| [src/state/GameState.ts](/src/state/GameState.ts) | TypeScript | 40 | 9 | 13 | 62 |
| [src/state/IGameState.ts](/src/state/IGameState.ts) | TypeScript | 39 | 26 | 15 | 80 |
| [src/types/Listener.ts](/src/types/Listener.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [src/types/turns/index.ts](/src/types/turns/index.ts) | TypeScript | 3 | 0 | 1 | 4 |
| [src/types/zones/Area.ts](/src/types/zones/Area.ts) | TypeScript | 1 | 0 | 1 | 2 |
| [src/types/zones/Visibility.ts](/src/types/zones/Visibility.ts) | TypeScript | 1 | 0 | 1 | 2 |
| [test/events/EventTracker.spec.ts](/test/events/EventTracker.spec.ts) | TypeScript | 45 | 0 | 15 | 60 |
| [test/game/Game.spec.ts](/test/game/Game.spec.ts) | TypeScript | 26 | 0 | 8 | 34 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 16 | 82 | 9 | 107 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)