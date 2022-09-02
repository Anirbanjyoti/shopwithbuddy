// import logo from './logo.svg';
import React, {} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Inventory from "./Pages/Inventory";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Orders from "./Pages/Orders";
import Navbar from "./Pages/Sheared/Navbar";
import Shop from "./Pages/Shop";
export const CartContext = React.createContext("cartItems");

function App() {
  // const [products] = useProducts();
  // const [cart] = useCart(products);

  return (
    <div>
      <CartContext.Provider>
        <Navbar></Navbar>
      </CartContext.Provider>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
