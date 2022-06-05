/**
 * TypeScript does not have expanded enums
 */
class CardType {
  cardType: string
  permanent: boolean

  static readonly Artifact = "Artifact"
  static readonly Creature = "Creature"
  static readonly Enchantment = "Enchantment"
  static readonly Instant = "Instant"
  static readonly Land = "Land"
  static readonly Sorcery = "Sorcery"

  constructor(
    cardType: string,
    permanent: boolean
  ) {
    this.cardType = cardType
    this.permanent = permanent
  }
}

export default CardType
