import ICard from "../cards/ICard";
import Deck from "../deck/Deck";

/**
 * Internal class for a Player after all operations have been performed to map it from the PlayerInitializer
 */
class Player {
  constructor(
    readonly deck: Deck,
    readonly hand: ICard[],
    readonly name?: string
  ) { }

}

export default Player
