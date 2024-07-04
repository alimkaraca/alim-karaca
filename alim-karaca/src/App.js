import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Cube from './components/Cube';

function App() {
  return (
    <div className='gradient overflow-x-hidden '>
    <Navbar />
    <div className="h-screen w-screen grid grid-cols-2">
    <div className='overflow-y-hidden relative bottom-10 left-14' >
    <Cube />
      </div>
      <div className='flex flex-col justify-center items-start select-none pb-16'> 
      
      <p className='text-red-600 text-5xl pb-1'>Hi, I'm Alim Karaca.</p>
      <p className='text-green-600 text-3xl pb-1'>I'm a UI/UX designer & front-end developer.</p>
      <p className='text-blue-600 text-2xl'>Let's make your dreams a reality.</p>
      </div>
    </div>
    </div>
  );
}

export default App;
