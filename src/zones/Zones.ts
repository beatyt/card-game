import Card from "cards/Card";
import ICard from "cards/ICard";
import Zone from "./Zone";

/**
 * Functions for interacting w/ zones
 */
class Zones {
  zones: Zone[]

  constructor() {
    this.zones = [
      new Zone(Zone.Hand, 'private'),
      new Zone(Zone.Graveyard, 'public'),
      new Zone(Zone.Library, 'private'),
      new Zone(Zone.Stack, 'public'),
      new Zone(Zone.Battlefield, 'public'),
      new Zone(Zone.Exile, 'public'),
      new Zone(Zone.Command, 'public'),
    ]
  }

  moveCardToZone(card: ICard, zone: Zone) {

  }
}

export default Zones
