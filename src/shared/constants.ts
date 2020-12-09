import { CreditConditions } from "../types/logic.types";

export const defaultConditions: CreditConditions = {
  amount: { min: 0, max: 0, limit: 0 },
  term: { min: 0, max: 0 },
  interestRate: 0,
};

export const RANGE = {
  AMOUNT: {
    STEP: 10,
  },
};
