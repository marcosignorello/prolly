import React from "react";
import { ThemeProvider } from "styled-components";
import { themeConfig } from "./config/theme";

const Theme = ({ children }) => (
  <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
);

export default Theme;
