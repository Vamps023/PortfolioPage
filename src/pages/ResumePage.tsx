import { ThemeProvider, createTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Footer from "./utils/Footer";
import TopBar from "./utils/TopBar";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const ResumePage: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default ResumePage;
