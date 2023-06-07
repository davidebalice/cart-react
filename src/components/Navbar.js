import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import logo from "../assets/logo_white.png";
import { useGlobalContext } from "../context/context";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isLoading, itemCounter } = useGlobalContext();

  return (
    <nav className="nav">
      <header className="nav-header">
        <Row className={classes.NavSx}>
          <NavLink to="/">
              <img src={logo} alt="DB logo" className="logo" />
          </NavLink>
          <NavLink to="/" className={classes.home}>
            <div className={classes.NavHome}>Home</div>
          </NavLink>
        </Row>
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
