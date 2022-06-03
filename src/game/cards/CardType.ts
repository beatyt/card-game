/**
 * TypeScript does not have expanded enums
 */
class CardType {
  permanent: boolean

  static readonly Artifact = "Artifact"
  static readonly Creature = "Creature"
  static readonly Enchantment = "Enchantment"
  static readonly Instant = "Instant"
  static readonly Land = "Land"
  static readonly Sorcery = "Sorcery"

  constructor(
    permanent: boolean
  ) {
    this.permanent = permanent
  }
}

export default CardType
