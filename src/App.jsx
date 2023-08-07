import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { StarsCanvas } from './components/canvas'

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
          {/* <StarsCanvas /> */}
        </div>
        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <Projects />

        <div
          className="bg-about bg-no-repeat 
            rounded-tl-[50px] rounded-br-[30px]">
          <div
            className="bg-about 
            bg-no-repeat rounded-tl-[50px] rounded-br-[30px]">
            <Experience />
          </div>
        </div>
      <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App
