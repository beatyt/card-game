import ICard from "../../cards/ICard"

interface IDeck {
  playerId: string
  cards: ICard[]

  shuffle(): any

  drawCard(): ICard | undefined

  drawCards(num: number): ICard[]
}

export default IDeck
