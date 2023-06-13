import Card from "./Card"
import Effect from './Effect'
import Library from './Library'

const library = new Library().init()

export default {
  Card,
  Effect,
  Library: library,
}
