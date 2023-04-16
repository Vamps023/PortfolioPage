import { createTheme, Grid, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Grid
      container
      style={{ height: "100vh", width: "100vw", backgroundColor: "#333" }}
    >
      <App />
    </Grid>
  </ThemeProvider>,
  document.getElementById("root")
);
