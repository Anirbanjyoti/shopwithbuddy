import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/download.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

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
        <Link to="/signup">Contact</Link>
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
      <div class="navbar bg-primary font-bold text-white py-3">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabIndex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/shop" class="w-1/2 rounded-lg">
            <img src={logo} alt="images"></img>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
        {user && user.displayName}
          <button href={Link} class="btn bg-secondary text-black">
            {login}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
