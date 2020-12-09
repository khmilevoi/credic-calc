import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CreditCalcHook } from "../types/logic.types";

export const useCreditCalc: CreditCalcHook = (input) => {
  const [amount, setAmount] = useState(input.amount.limit);
  const [term, setTerm] = useState(input.term.max);

  useEffect(() => {
    setAmount(input.amount.limit);
    setTerm(input.term.max);
  }, [input]);

  const result = useMemo(() => {
    return amount + amount * input.interestRate * term;
  }, [amount, input, term]);

  const nextTerm = useMemo(() => {
    return moment().add(term, "days");
  }, [term]);

  const updateAmount = useCallback(
    (num: number) => {
      if (num > input.amount.limit) {
        setAmount(input.amount.limit);
      } else {
        setAmount(num);
      }
    },
    [input]
  );

  return {
    setAmount: updateAmount,
    amount,
    setTerm,
    term,
    nextTerm,
    result,
  };
};
