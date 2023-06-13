/**
 * External parameter for creating players
 */
class PlayerInitializer {
  constructor(
    readonly playerId: string,
    readonly deck: { name: string, cardUris: string[] },
    readonly name?: string,
  ) { }
}

export { PlayerInitializer };

