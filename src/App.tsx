import React from "react";
import "./App.css";
import { FontsImport, theme } from "./theme/theme";
import RoutesList from "./routes";
import { ThemeProvider } from "styled-components";
import { SingInProvider } from "./contexts/auth";

function App() {
  return (
    <SingInProvider>
      <ThemeProvider theme={theme}>
        <FontsImport />
        <RoutesList />
      </ThemeProvider>
    </SingInProvider>
  );
}

export default App;
