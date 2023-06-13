import { PlayerEvents } from "../../GameEvents"

type PlayerDamagedEvent = {
  name: PlayerEvents.PlayerDamaged,
  payload: {
    playerId: string,
  }
}

type RandomPlayerSelectedEvent = {
  name: PlayerEvents.RandomPlayerSelected,
  payload: {
    playerId: string,
  }
}

type StartingPlayerSelectedEvent = {
  name: PlayerEvents.StartingPlayerSelected,
  payload: {
    playerId: string,
  }
}

type PlayerLost = {
  name: PlayerEvents.PlayerLost,
  payload: {
    playerId: string,
  }
}


export type PlayerEventPayloads =
  PlayerDamagedEvent |
  RandomPlayerSelectedEvent |
  StartingPlayerSelectedEvent |
  PlayerLost
