import ICard from "../../api/cards/ICard"

interface DeckFunctions {
  drawCard(): ICard | undefined

  drawCards(num: number): ICard[]
}

export default DeckFunctions
