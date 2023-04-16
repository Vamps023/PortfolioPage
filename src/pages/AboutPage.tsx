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
  aboutSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    color: "#fff",

  },
  aboutText: {
    maxWidth: "50rem",
    textAlign: "center",
    color: "#fff",

  },
}));

const AboutPage: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TopBar />
        <section className={classes.aboutSection}>
          <h1>About Me</h1>
          <p className={classes.aboutText}>
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
          </p>
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;
