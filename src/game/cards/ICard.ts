
import { Area } from "../../types/zones/Area"
import Ability from "./Ability"
import CardType from "./CardType"
import CardValue from "./CardValue"
import Effect from "./Effect"
import SubType from "./SubType"

interface ICard {
  name: string

  id: string

  /**
   * Used for lookups
   */
  cardUid: string

  originalOwnerId?: string

  ownerId?: string

  power?: CardValue

  toughness?: CardValue

  cardType: CardType

  subTypes?: SubType[]

  abilities?: Ability[]

  // ex: Draw A Card
  effects?: Effect[]

  location?: Area

  manaCostPaid: boolean

  resolve(): void

  moveToZone(area: Area): void

  moveToGraveyard(): void
}

export default ICard
