import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Coin from './components/coin';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/coin"  element={<Coin/>}/>
      </Routes>
    </div>
  );
}

export default App;
