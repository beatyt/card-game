import ICard from "../../game/cards/ICard"

interface IDeck {
  drawCard(): ICard | undefined

  drawCards(num: number): ICard[]
}

export default IDeck
