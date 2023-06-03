import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import logo from "../assets/logo_white.png";
import { useGlobalContext } from "../context/context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLoading, itemCounter } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <NavLink to="/">
          <div className="nav-brand">
            <img src={logo} alt="DB logo" className="logo"/>
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div className="nav-cart">
            <HiShoppingCart className="icon nav-icon" />
            {!isLoading && <div className="cart-counter">{itemCounter}</div>}
          </div>{" "}
        </NavLink>
      </header>
    </nav>
  );
};

export default Navbar;
