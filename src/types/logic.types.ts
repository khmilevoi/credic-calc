import moment from "moment";

export type CreditConditions = {
  amount: { min: number; max: number; limit: number };
  term: { min: number; max: number };
  interestRate: number;
};

export type CreditCalcHook = (
  input: CreditConditions
) => {
  setAmount: (num: number) => any;
  setTerm: (num: number) => any;
  amount: number;
  term: number;
  nextTerm: moment.Moment;
  result: number;
};
