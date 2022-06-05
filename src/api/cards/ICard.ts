import Ability from "../../game/cards/Ability"
import CardType from "../../game/cards/CardType"
import CardValue from "../../game/cards/CardValue"
import Effect from "../../game/cards/Effect"
import SubType from "../../game/cards/SubType"

interface ICard {
  name: string

  cardUid: string

  power: CardValue

  toughness: CardValue

  cardType: CardType

  subTypes: SubType[]

  abilities: Ability[]

  // ex: Draw A Card
  effects: Effect[]

}

export default ICard
