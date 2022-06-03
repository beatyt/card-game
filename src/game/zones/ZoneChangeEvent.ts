import ICard from "@api/cards/ICard"
import { Area } from "types/zones/Area"

export default interface ZoneChangeEvent {
  from: Area
  
  to: Area

  cards: ICard[]
}
