import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
        <Router>
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/resume" element={<ResumePage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />

          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
