import { Route, Routes } from 'react-router-dom';

import { Home, Card, CartPage } from './pages';
import { ControlledOpenSpeedDial } from './components';
import { Navbar, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ControlledOpenSpeedDial></ControlledOpenSpeedDial>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/card/:id" element={<Card></Card>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
