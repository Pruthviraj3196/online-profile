import './App.css';
import About from './components/About';
import Certifications from './components/Certifications';
import Info from './components/Info';


function App() {
  return (
    <div className='main'>
      <div className='info'>
        <Info />
        <About />
      </div>
    </div>
  );
}

export default App;
