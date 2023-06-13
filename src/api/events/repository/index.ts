import { DeckEventPayloads } from '../../actions/decks'
import { CardEventPayloads } from './cards'
import { GameEventPayloads } from './game'
import { PhaseEventPayloads } from './phases'
import { PlayerEventPayloads } from './players'
import { TurnEventPayloads } from './turns'

export type NotificationEvent =
  CardEventPayloads |
  PlayerEventPayloads |
  DeckEventPayloads |
  TurnEventPayloads |
  GameEventPayloads |
  PlayerEventPayloads |
  PhaseEventPayloads
