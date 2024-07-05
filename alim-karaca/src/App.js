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
    <Skills />
    <Work />
  </div>
);

export default App;
