import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import logo from "../assets/logo_white.png";
import { useGlobalContext } from "../context/context";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isLoading, itemCounter } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <NavLink to="/">
          <div className="nav-brand">
            <img src={logo} alt="DB logo" className="logo" />
          </div>
        </NavLink>
        <NavLink to="/cart" className={classes.NavLink}>
          <div className="nav-cart">
            <HiShoppingCart className={classes.cartIcon + " icon nav-icon"} />
            {!isLoading && <div className={classes.cartNum}>{itemCounter}</div>}
          </div>{" "}
        </NavLink>
      </header>
    </nav>
  );
};

export default Navbar;
