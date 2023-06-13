import ZoneChangeEvent from "../../../api/events/repository/zones/ZoneChangeEvent";
import { Area } from "../../../types/zones/Area";
import ICard from "../../cards/ICard";
import Zone from "./Zone";

/**
 * Functions for interacting w/ zones
 */
class Zones {
  static instance: Zones;

  zones: Zone[]

  zoneCardMap: Map<Area, ICard[]>

  constructor() {
    this.zones = [
      new Zone(Area.Hand, 'private'),
      new Zone(Area.Graveyard, 'public'),
      new Zone(Area.Library, 'private'),
      new Zone(Area.Stack, 'public'),
      new Zone(Area.Battlefield, 'public'),
      new Zone(Area.Exile, 'public'),
      new Zone(Area.Command, 'public'),
    ]

    this.zoneCardMap = new Map()
  }

  static getInstance() {
    if (!Zones.instance) {
      Zones.instance = new Zones()
    }

    return Zones.instance
  }

  // @todo modifies state so make it an event or action
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
