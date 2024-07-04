import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/Home';
import Skills from './components/Skills';

const App = () => (
  <div className='gradient overflow-x-hidden'>
    <Navbar />
    <Home />
    <Skills />
  </div>
);

export default App;
