import { createRoot } from "react-dom/client";
import { createTheme, Grid, ThemeProvider } from "@material-ui/core";
import React from "react";
import App from "./App";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Grid
      container
      style={{ height: "100vh", width: "100vw", backgroundColor: "#333" }}
    >
      <App />
    </Grid>
  </ThemeProvider>
);
