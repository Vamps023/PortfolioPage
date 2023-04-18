import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import TopBar from "./components/TopBar";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import LandingPage from "./pages/LandingPages";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  section: {
    height: "100vh",
    scrollSnapAlign: "start",
    scrollSnapStop: "always",
    backgroundColor: "#333",
  },
});

function App() {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <section style={{ backgroundColor: "#333" }} id="landing-page">
        <LandingPage />
      </section>
      <section style={{ backgroundColor: "#333" }} id="resume-page">
        <ResumePage />
      </section>
      <section style={{ backgroundColor: "#333" }} id="projects-page">
        <ProjectsPage />
      </section>
      <section style={{ backgroundColor: "#333" }} id="about-page">
        <AboutPage />
      </section>
      <section style={{ backgroundColor: "#333" }} id="contacts-page">
        <ContactsPage />
      </section>
    </ThemeProvider>
  );
}

export default App;
