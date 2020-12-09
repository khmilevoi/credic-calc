import React from "react";
import { useCreditCalc } from "../hooks/credit-calc.hook";
import { useFetchConditions } from "../hooks/fetch-conditions.hook";
import { RANGE } from "../shared/constants";
import {
  CalculatorContainer,
  CalculatorRangeWrapper,
  CalculatorResult,
  CalculatorResultLabel,
  CalculatorResultValue,
} from "../styles/calculator.styles";
import { Range } from "./range.component";

export const Calculator = () => {
  const conditions = useFetchConditions();
  const { setTerm, setAmount, amount, term, result, nextTerm } = useCreditCalc(
    conditions
  );

  return (
    <CalculatorContainer>
      <CalculatorRangeWrapper>
        <Range
          value={amount}
          max={conditions.amount.max}
          min={conditions.amount.min}
          onChange={setAmount}
          step={RANGE.AMOUNT.STEP}
          title={"Сумма, грн"}
        />
        <Range
          value={term}
          max={conditions.term.max}
          min={conditions.term.min}
          onChange={setTerm}
          step={1}
          title={"Срок, дней"}
          subtitle={`До ${nextTerm.format("DD.MM.YYYY dd")}`}
        />
      </CalculatorRangeWrapper>
      <CalculatorResult>
        <CalculatorResultLabel>Итого к возврату:</CalculatorResultLabel>
        <CalculatorResultValue>{Math.floor(result)} грн</CalculatorResultValue>
      </CalculatorResult>
    </CalculatorContainer>
  );
};
