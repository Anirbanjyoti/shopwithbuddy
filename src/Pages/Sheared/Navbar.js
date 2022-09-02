import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/download.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { CartContext } from "../../App";

const Navbar = () => {
  const cartItems = useContext(CartContext);
  const [user] = useAuthState(auth);

  let quantity = 0;
  if (cartItems) {
    for (const product of cartItems) {
      quantity = quantity + product.quantity;
    }

  }
  // Start cart updating
  // End cart updating
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
  };
  const menuItems = (
    <>
      <li>
        <Link to="/shop">Shop</Link>
      </li>

      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <Link to="/inventory">Inventory</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  const login = (
    <>
      {user ? (
        <button className="btn btn-ghost" onClick={logout}>
          Sign Out
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-primary font-bold text-white py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/shop" className="w-1/2 rounded-lg">
            <img src={logo} alt="images"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <Link to="/orders">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{quantity}</span>
              </div>
            </Link>
          </label>
          {user && user.displayName}
          <button href={Link} className="btn bg-secondary text-black ml-2">
            {login}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
