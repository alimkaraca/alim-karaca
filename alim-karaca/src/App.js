import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Experience from './components/Experience';
import RadialGradientMover from './components/MouseGradient';

const App = () => (
  <RadialGradientMover>
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
    <div id='contact-section'></div>
  </div>
  </RadialGradientMover>
);

export default App;
