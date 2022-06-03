class CardValue {
  constructor(
    private readonly baseValue: number,
    private boostedValue: number,
  ) { }

  /**
   * Example: Counters adding to the boosted value
   * @param amount 
   */
  increment(amount: number) {
    this.boostedValue += amount
  }

  decrement(amount: number) {
    this.boostedValue -= amount
  }

  /**
   * Returning a cards base power + modifiers
   * Can also be used if we need things like * for variable
   */
  get displayValue() {
    return this.baseValue + this.boostedValue
  }
}

export default CardValue
