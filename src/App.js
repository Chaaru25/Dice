
import './App.css';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
      
      </Routes>
      {/* <h2>Hello</h2> */}
    </div>
  );
}

export default App;
