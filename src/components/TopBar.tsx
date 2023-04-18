import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    overflow: "auto",
  },
  button: {
    color: "#fff",
    marginLeft: "20px",
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          My Website
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="landing-page"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          className={classes.button}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="resume-page"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          className={classes.button}
        >
          Resume
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="projects-page"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          className={classes.button}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="about-page"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          className={classes.button}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="contacts-page"
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          className={classes.button}
        >
          Contacts
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
