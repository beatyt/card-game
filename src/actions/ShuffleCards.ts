import ICard from "../cards/ICard";

/**
 * Uses a Schwartzian transform
 */
const shuffleCards = (cards: ICard[]): ICard[] => {
  console.time('Shuffle')

  const shuffledCards = cards.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  console.log(`Deck after shuffle: ${shuffledCards.map(value => value.name)}`)

  console.timeEnd('Shuffle')

  return shuffledCards
}

export default shuffleCards
