import ICard from "../../cards/ICard"

interface IDeck {
  drawCard(): ICard | undefined

  drawCards(num: number): ICard[]
}

export default IDeck
