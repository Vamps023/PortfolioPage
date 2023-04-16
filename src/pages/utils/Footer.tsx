import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },

  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#333",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
  },

  container: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.footer}>
        <Container className={classes.container} maxWidth="lg">
          <Typography variant="body1" align="center" style={{ fontSize: "0.6rem" }}>
            © 2023 VAMPS. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
