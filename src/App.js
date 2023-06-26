import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Home, Card, CartPage, CatalogPage } from './pages';
import { ControlledOpenSpeedDial, Popup } from './components';
import { Navbar, Footer } from './components';
import { setPopup } from './redux/slices/popupSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.popup.open);

  return (
    <div className="App">
      <div className="content">
        <Navbar></Navbar>
        <ControlledOpenSpeedDial></ControlledOpenSpeedDial>
        <Popup dispatch={dispatch} open={open} setPopup={setPopup}></Popup>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/card/:id" element={<Card></Card>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/catalog" element={<CatalogPage></CatalogPage>}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
