import Phase from "./IPhase";

class Upkeep implements Phase {
  constructor() {

  }

  begin(): void {
    throw new Error("Method not implemented.");
  }

  end(): void {
    throw new Error("Method not implemented.");
  }
}

export default Upkeep
