import Zones from "./zones/Zones";

export default class Board {
  static instance: Board
  zones: Zones

  constructor(
  ) {
    this.zones = new Zones();
  }

  static getInstance() {
    if (!Board.instance) {
      Board.instance = new Board()
    }

    return Board.instance
  }
}
