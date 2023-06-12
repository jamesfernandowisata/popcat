import logo from './logo.svg';
import './App.css';
import Main from './Main.tsx';
import { Link,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="main" element={<Main />} />
          </Routes>
      <header className="App-header"> 
          <div className="TitleEffect">
            <span className='charEffect2'>F</span>
            <span className='charEffect2'>E</span>
            <span className='charEffect2'>e</span>
            <span className='charEffect2'>D</span>
            <span className='charEffect2'>.</span>
            <span className='charEffect2'>T</span>
            <span className='charEffect2'>h</span>
            <span className='charEffect3'>E</span>
            <span className='charEffect2'>.</span>
            <span className='charEffect2'>C</span>
            <span className='charEffect2'>a</span>
            <span className='charEffect2'>T</span>
          </div>
          <div className='scroll'>
            <span>= scroll </span>
            <span className='charEffect2'>d</span>
            <span>own =</span>
          </div>
      </header> 
    </div>
  );
}

export default App;
