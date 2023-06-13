enum GamePhase {
  Initializing = "Initializing", 
  Initialized = "Initialized", 
  Started = "Started",
  /**
   * Mulligans
   */
  SetupStart = "Setup:Start", 
  /**
   * Cards drawn into hands, next is to start the turns with first player
   */
  SetupEnd = "Setup:End",
  /**
   * TurnPhases
   */
  Playing = "Playing",
  /**
   * Over
   */
  Ended = "Ended"
}

export default GamePhase
