import Card from './Card'
import Effect from './Effect'
import Library from './Library'

import cards from './cardLibrary'
import ICard from './ICard'

const map = new Map<string, ICard>()

cards.map(card => {
  console.time('Loading Cards')
  const _card = new card()
  map.set(_card.cardUid, _card)
  console.timeEnd('Loading Cards')
})

export default {
  Card,
  Effect,
  Library,
  map
}
