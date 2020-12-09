import React, { useCallback } from "react";
import {
  RangeContainer,
  RangeInfo,
  RangeInfoLeft,
  RangeInfoRight,
  RangeInput,
  RangeInputContainer,
  RangeLabel,
  RangeSubtitle,
  RangeTitle,
  RangeValue,
} from "../styles/calculator.styles";

export type RangeProps = {
  max: number;
  min: number;
  value: number;
  step: number;
  onChange: (num: number) => any;
  title: string;
  subtitle?: string;
};

export const Range: React.FunctionComponent<RangeProps> = ({
  value,
  max,
  min,
  step,
  onChange,
  title,
  subtitle,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number.parseFloat(event.currentTarget.value));
    },
    [onChange]
  );

  return (
    <RangeContainer>
      <RangeLabel>
        <RangeTitle>{title}</RangeTitle>
        <RangeValue>{value}</RangeValue>
        <RangeSubtitle>{subtitle}</RangeSubtitle>
      </RangeLabel>

      <RangeInputContainer>
        <RangeInfo>
          <RangeInfoLeft>{min}</RangeInfoLeft>
          <RangeInfoRight>{max}</RangeInfoRight>
        </RangeInfo>
        <RangeInput
          type={"range"}
          max={max}
          min={min}
          value={value}
          step={step}
          onChange={handleChange}
        />
      </RangeInputContainer>
    </RangeContainer>
  );
};
