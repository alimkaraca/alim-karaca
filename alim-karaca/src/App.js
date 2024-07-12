import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import HamburgerMenu from './components/HamburgerButton';
import RadialGradientMover from './components/MouseGradient';

const App = () => (
  <RadialGradientMover>
  <HamburgerMenu/>
  <div className='overflow-hidden'>
    <Navbar />
    <div id='home-section'>
    <Home />
    </div>
    <div id='skills-section'>
    <Skills />
    </div>
    <div id='work-section'>
    <Work />
    </div>
    <div id='experience-section'>
      <Experience/>
    </div>
    <div id='contact-section'>
      <Contact/>
    </div>
  </div>
  </RadialGradientMover>
);

export default App;
