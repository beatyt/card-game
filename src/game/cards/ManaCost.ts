import Color from "./Color";

export default interface ManaCost {
  get value(): number
  get color(): Color
}
