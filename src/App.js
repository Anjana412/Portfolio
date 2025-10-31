import logo from './logo.svg';
import './App.css';
import Portfolio from './Portfolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        {/* <Route path='/about' element={<About/>}></Route> */}


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
