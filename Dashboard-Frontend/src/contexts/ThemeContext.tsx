import React, { useState } from "react";
import { ThemeProvider as StyledComponentProvider } from "styled-components";
import { ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";

import { themeCreator } from "src/theme/base";

type ThemeProviderWrapperType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  setThemeName: (themeName: string) => void;
};

export const ThemeContext = React.createContext({} as ThemeContextType);

const ThemeProviderWrapper = (props: ThemeProviderWrapperType) => {
  const curThemeName = localStorage.getItem("appTheme") || "LightTheme";
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);

  const setThemeName = (theme: string): void => {
    localStorage.setItem("appTheme", theme);
    _setThemeName(theme);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={{ setThemeName }}>
        <ThemeProvider theme={theme}>
          <StyledComponentProvider theme={theme}>
            {props.children}
          </StyledComponentProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
