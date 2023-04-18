import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
  },
  introText: {
    fontWeight: "bold",
    fontSize: "32px",
    marginTop: "50px",
    color: "#fff",
  },
  button: {
    marginTop: "30px",
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
  main: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Box className={classes.main}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <Typography variant="h2" className={classes.introText}>
                  HI, I’M Swapnil. <br /> Welcome to my simple portfolio page.
                </Typography>
                <Button variant="contained" className={classes.button}>
                  VIEW MY PROJECTS
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Project"
                  className={classes.image}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
