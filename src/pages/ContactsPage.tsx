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
  contactInfo: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    "& > *": {
      margin: "0.5rem",
    },
  },
}));

const ContactsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar />
        <div className={classes.contactInfo}>
          <h2>Contact Information</h2>
          <p>
            I am open to hearing about any job opportunities, freelance work, or
            any other inquiries you may have. Please feel free to reach out to
            me with any questions or comments.
          </p>
          <p>Email: swapnilnare007@gmail.com</p>
          <p>Phone: +91 87665679006</p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/swapnil-nare-b90303193/">
              https://www.linkedin.com
            </a>
          </p>
          <p>
            Artstaion:{" "}
            <a href="https://www.artstation.com/vamps23/profile">
              https://www.artstation.com/
            </a>
          </p>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ContactsPage;
