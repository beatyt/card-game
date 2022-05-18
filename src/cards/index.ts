import Card from './Card'
import Effect from './Effect'
import Library from './Library'

import cards from './cardLibrary'
import ICard from './ICard'

const map = new Map<string, ICard>()

cards.map(card => {
  const _card = new card()
  map.set(_card.cardUid, _card)
})

export default {
  Card,
  Effect,
  Library,
  map
}
