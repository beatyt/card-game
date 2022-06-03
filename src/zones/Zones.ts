import ICard from "cards/ICard";
import { Area } from "../types/zones/Area";
import Zone from "./Zone";
import ZoneChangeEvent from "./ZoneChangeEvent";

/**
 * Functions for interacting w/ zones
 */
class Zones {
  zones: Zone[]

  zoneCardMap: Map<Area, ICard[]>

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

    this.zoneCardMap = new Map()
  }

  moveCardToZone(card: ICard, zones: ZoneChangeEvent) {
    const fromZone = zones.from
    const targetZone = zones.to

    const fromZoneCards = this.zoneCardMap.get(fromZone)
    const targetZoneCards = this.zoneCardMap.get(targetZone)

    // remove from
    // add to
  }

  getCardsInZone(area: Area) {
    const zone = this.zones.find(z => z.zone === area)

    if (!zone) {
      throw new Error(`No such zone ${zone}`)
    }

    return this.zoneCardMap.get(zone.zone)
  }
}

export default Zones
