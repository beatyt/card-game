import ManaCost from "../../../game/cards/ManaCost";
import { Area } from "../../../types/zones/Area";

export interface ICards {
  changePower(amount: number): void;
  changeToughness(amount: number): void;
  payManaCost(cardId: string): void;
  changeManaCost(amount: ManaCost): void;
  moveToZone(zone: Area): void;
}

const actions = {};
const state = {};

export default {
  ...actions,
  ...state,
} as ICards
