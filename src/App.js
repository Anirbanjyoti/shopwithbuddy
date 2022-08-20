// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Inventory from './Pages/Inventory';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Orders from './Pages/Orders';
import Navbar from './Pages/Sheared/Navbar';
import Shop from './Pages/Shop';

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
