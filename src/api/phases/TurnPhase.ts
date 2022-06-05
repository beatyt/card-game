/**
 * The phases of the game
 */
enum TurnPhase {
  TurnStart = "Turn:Start",
  TurnEnd = "Turn:End",
  UpkeepStart = "Upkeep:Start",
  UpkeepEnd = "Upkeep:End",
  Draw = "Draw",
  MainStart = "Main:Start",
  MainEnd = "Main:End",
  CombatStart = "Combat:Start",
  CombatEnd = "Combat:End",
  End = "End",
}

export default TurnPhase
