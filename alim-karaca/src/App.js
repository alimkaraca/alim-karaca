import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';

const App = () => (
  <div className='gradient overflow-x-hidden'>
    <Navbar />
    <Home />
    <div id='skills-section'>
    <Skills />
    </div>
    <div id='work-section'>
    <Work />
    </div>
    <div id='experience-section'></div>
    <div id='contact-section'></div>
  </div>
);

export default App;
