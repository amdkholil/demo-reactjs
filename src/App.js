import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Coin from './components/coin';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
