/**
 * External parameter for creating players
 */
class PlayerInitializer {
  constructor(
    readonly playerId: string,
    readonly deck: string[],
    readonly name?: string,
  ) {

  }
}

export { PlayerInitializer }
