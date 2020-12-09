import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export const AppContainer = styled.div`
  display: flex;
`;

// calculator

export const CalculatorContainer = styled.div`
  min-width: 730px;

  padding: 12px 8px;
  margin: 15px;

  border-radius: 18px;

  display: flex;
  //justify-content: space-between;
  flex-wrap: wrap;

  background-color: #fff;
  box-shadow: 0 6px 20px rgba(38, 153, 251, 0.2);
`;

export const CalculatorRangeWrapper = styled.div`
  display: flex;
`;

export const CalculatorResult = styled.div`
  width: 158px;

  margin-left: 14px;
  margin-top: 14px;

  display: flex;
  flex-direction: column;
`;

export const CalculatorResultLabel = styled.span``;

export const CalculatorResultValue = styled.span`
  font-size: 38px;
`;

// range

export const RangeContainer = styled.div`
  width: 257px;

  padding: 13px 6px 5px 6px;
  margin: 0 10px;

  border-radius: 18px;

  box-shadow: 0 4px 15px rgba(26, 124, 206, 0.37);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RangeLabel = styled.div`
  padding: 0 10px;
`;

export const RangeTitle = styled.div`
  width: 100%;

  margin-bottom: 4px;

  display: flex;
  justify-content: space-between;

  white-space: nowrap;
`;

export const RangeSubtitle = styled.div`
  font-size: 15px;
  color: #000000bf;
`;

export const RangeValue = styled.div`
  font-size: 38px;
`;

export const RangeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeInputContainer = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;

  font-size: 11px;
`;

export const RangeInfoLeft = styled.div``;
export const RangeInfoRight = styled.div``;

export const RangeInput = styled.input`
  width: 100%;
`;
