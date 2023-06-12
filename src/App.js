import { Route, Routes } from 'react-router-dom';

import { Home, Card } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/card/:id" element={<Card></Card>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
