import { Box, Typography } from "@material-ui/core";
import {
  ThemeProvider,
  createTheme,
  makeStyles,
} from "@material-ui/core/styles";
import React from "react";

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
  aboutSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    color: "#fff",
    backgroundColor: "#333", // <-- add this line
  },
  aboutText: {
    maxWidth: "50rem",
    textAlign: "center",
    color: "#fff",
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#333" }}>
        <Box className={classes.aboutSection} minHeight="100vh">
          <Typography variant="h4">About Me</Typography>
          <Typography variant="body1" className={classes.aboutText}>
            Hello and welcome to my portfolio! I'm a 3D artist with over three
            years plus of experience working in the VFX and game industry. My
            expertise includes proficiency in a variety of software tools such
            as Maya, ZBrush, Substance Painter, Unreal Engine, Blender, and
            Photoshop. Throughout my career, I have honed my skills as a
            creative and motivated problem solver, always striving for
            excellence in every project I work on. One of my biggest strengths
            is my strong attention to detail, which allows me to produce
            high-quality work that meets and exceeds expectations. In this
            portfolio, you will find some of my latest projects that showcase my
            diverse range of skills and experience. From character modeling and
            animation to environment design and texturing, I take pride in every
            aspect of the 3D production pipeline. Thank you for visiting my
            portfolio, and I look forward to hearing from you soon.
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;
