type Visibility = 'public' | 'private'

export default class Zone {
  /**
   * Can anyone view this zone ex: graveyard or is it private ex: hand
   */
  visibility: Visibility
  zone: string

  static readonly Hand = "Hand"
  static readonly Graveyard = "Graveyard"
  static readonly Library = "Library"
  static readonly Stack = "Stack"
  static readonly Battlefield = "Battlefield"
  static readonly Exile = "Exile"
  static readonly Command = "Command"

  constructor(
    zone: string,
    visibility: Visibility
  ) {
    this.zone = zone,
    this.visibility = visibility
  }
}
