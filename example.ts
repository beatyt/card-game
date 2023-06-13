import { DeckEventPayloads } from './src/api/actions/decks'
import { Payload } from './src/api/events'
import { CardEvents, DeckEvents, EventTypes, PhaseEvents, PlayerEvents, TurnEvents } from './src/api/events/GameEvents'
import { CardEventPayloads } from './src/api/events/repository/cards'
import { PhaseEventPayloads } from './src/api/events/repository/phases'
import { PlayerEventPayloads } from './src/api/events/repository/players'
import { TurnEventPayloads } from './src/api/events/repository/turns'
import { TurnPhase } from './src/api/phases/TurnPhase'
import { PlayerInitializer } from './src/api/players/PlayerInitializer'
import Game from './src/index'
import { Listener } from './src/types/Listener'
import { TurnOrderStrategy } from './src/types/turns'

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
  },
  {
    playerId: '2',
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
  },
  {
    playerId: '3',
    name: 'Test Player 3',
    deck: {
      name: 'player3:deck',
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
  },
  {
    playerId: '4',
    name: 'Test Player 4',
    deck: {
      name: 'player4:deck',
      cardUris: [
        '3',
        '3',
        '3',
        '3',
        '3',
        '3',
        '3',
        '3',
      ]
    }
  }
]

const gameEventHandler = (d: Payload) => {
  const { name, payload, gameState } = d
  const { playerData, status, phase, turnPhase, zones } = gameState

  const players = playerData?.players
  const hands = playerData?.hands
  const decks = playerData?.Decks

  const handCards = hands?.cards.map(h => h.cards)
  const deckCards = decks?.cards.map(h => h.cards)

  if (d.name === Game.Events.GameInitialized) {
    console.log('startingPlayer', playerData?.startingPlayer)
    Game.start()
  }

  if (name === Game.Events.GameStarted) {
    Game.Players.Decks.shuffle()
    Game.Turns.progress()
  }

  if (name === Game.Events.GameEnded) {
    // scoring?
    Game.rollback()
  }

  if (name === Game.Events.TurnProgression) {
    console.log('Turn progressed', gameState.turnPhase)

    // if (gameState.turnPhase !== TurnPhase.UpkeepStart) {
    //   Game.setPhase(TurnPhase.UpkeepStart) // ex: user clicks a button, fire this
    // }
    Game.Turns.progress()
  }
}

const deckEventHandler = (d: DeckEventPayloads) => {
  const { name, payload } = d;

  console.log(name);
  if (d.name === DeckEvents.DeckShuffled) {
    console.log(d.payload)
  }

  if (d.name === DeckEvents.DecksShuffled) {
    Game.Players.drawCards(7);
    console.log(d.payload)
  }
}

// turnEventHandler
// event for starting player selected

const cardEventHandler = (d: CardEventPayloads) => {
  const { name, payload } = d;

  if (d.name === CardEvents.CardDrawn) {
    console.log(d.payload)
  }

  if (d.name === CardEvents.ZoneChanged) {
    console.log("A card moved")
    // Do animations or w/e
  }
}

const playerEventHandler = (d: PlayerEventPayloads) => {
  const { name, payload } = d;

  switch (name) {
    case PlayerEvents.PlayerDamaged:
      console.log(name);
      break;

    case PlayerEvents.RandomPlayerSelected:
      console.log(name);
      break;

    case PlayerEvents.StartingPlayerSelected:
      console.log(name);
      break;

    case PlayerEvents.PlayerLost:
      const { playerId } = payload;
      console.log(`${playerId} has lost`);
      break;

    default:
      throw new Error(`Unknown event ${name}`)
  }
}

/**
 * Tracks movements through phases like turn start, combat, etc.
 * 
 * @param d 
 */
const turnEventHandler = (d: TurnEventPayloads) => {
  const { name, payload } = d;

  switch (name) {
    case (TurnEvents.TurnChanged): {
      const { turn } = payload;

      if (turn === TurnPhase.TurnStart) {
        const { currentTurnsPlayerId } = payload;
        Game.Phases.progress()
      }

      if (turn === TurnPhase.TurnEnd) {
        Game.Turns.progress()
      }

      break;
    }

    case (TurnEvents.TurnOrderCreated): {
      console.log(payload);
      break;
    }

    default:
      throw new Error(`Unknown event ${name}`)
  }
}

const phaseEventHandler = (d: PhaseEventPayloads) => {
  const { name, payload } = d;

  console.log(`New phase ${name}`);

  switch (name) {
    case (PhaseEvents.UpkeepStarted): {
      break;
    }
    case (PhaseEvents.UpkeepEnded): {
      break;
    }
    case (PhaseEvents.DrawStarted): {
      break;
    }
    case (PhaseEvents.DrawEnded): {
      break;
    }
    case (PhaseEvents.MainStarted): {
      break;
    }
    case (PhaseEvents.MainEnded): {
      break;
    }
    case (PhaseEvents.CombatStarted): {
      break;
    }
    case (PhaseEvents.CombatEnded): {
      break;
    }
    case (PhaseEvents.PhaseChanged): {
      console.log(payload.phase);

      if (payload.phase === PhaseEvents.UpkeepStarted) {
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.UpkeepEnded) {
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.DrawStarted) {
        const currentPlayer = Game.state().playerData?.currentTurnsPlayerId
        Game.Players.drawCard(currentPlayer);
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.DrawEnded) {
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.MainStarted) {
        Game.Players.playCard('1')
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.MainEnded) {
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.CombatStarted) {
        Game.Phases.progress()
      }

      if (payload.phase === PhaseEvents.CombatEnded) {
        Game.Turns.progress()
      }
      break;
    }
  }

}

const listeners: Listener[] = [
  {
    event: EventTypes.GameEvent,
    callback: gameEventHandler
  },
  {
    event: EventTypes.CardEvent,
    callback: cardEventHandler
  },
  {
    event: EventTypes.PlayerEvent,
    callback: playerEventHandler
  },
  {
    event: EventTypes.DeckEvent,
    callback: deckEventHandler
  },
  {
    event: EventTypes.TurnEvent,
    callback: turnEventHandler
  },
  {
    event: EventTypes.PhaseEvent,
    callback: phaseEventHandler
  }
]

/**
 * Will run before everything, so don't worry about referencing it in handlers
 */
Game.init({
  players,
  listeners,
  turnOrderStrategy: TurnOrderStrategy.Random
})
