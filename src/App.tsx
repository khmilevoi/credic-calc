import React from "react";
import { Calculator } from "./components/calculator.component";
import { GlobalStyles, AppContainer } from "./styles/calculator.styles";

export const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />

      <Calculator />
    </AppContainer>
  );
};
