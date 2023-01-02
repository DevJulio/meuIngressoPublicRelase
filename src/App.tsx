import React from "react";
import "./App.css";
 import { FontsImport, theme } from "./theme/theme";
import RoutesList from "./routes";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FontsImport />
      <RoutesList />
    </ThemeProvider>
  );
}

export default App;
