/**
 * External parameter for creating players
 */
class PlayerInitializer {
  constructor(
    readonly deck: string[],
    readonly name?: string,
  ) {

  }
}

export { PlayerInitializer }
