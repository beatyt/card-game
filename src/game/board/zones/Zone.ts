import { Area } from "../../../types/zones/Area"
import { Visibility } from "../../../types/zones/Visibility"

export default class Zone {
  /**
   * Can anyone view this zone ex: graveyard or is it private ex: hand
   */
  visibility: Visibility
  zone: Area

  static readonly Hand = "Hand"
  static readonly Graveyard = "Graveyard"
  static readonly Library = "Library"
  static readonly Stack = "Stack"
  static readonly Battlefield = "Battlefield"
  static readonly Exile = "Exile"
  static readonly Command = "Command"

  constructor(
    zone: Area,
    visibility: Visibility
  ) {
    this.zone = zone
    this.visibility = visibility
  }
}
