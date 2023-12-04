import React, { useState, useEffect, useRef, useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import logo from "../../assets/logo_white.png";
import { AuthContext } from "../../context/authContext";
import { useGlobalContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import classes from "./Navbar.module.css";
import CartItemNav from "../Cart/CartItemNav";
import formatNumber from "../../utils/formatNumber";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { isLoading, itemCounter } = useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);
  const { cart, total } = useGlobalContext();
  const formattedTotal = formatNumber(total);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const cartRef = useRef(null);

  useEffect(() => {
    if (itemCounter >= 1) {
      if (cartRef.current) {
        cartRef.current.classList.add(classes.cartZoom);
      }

      const animationEndHandler = () => {
        cartRef.current.classList.remove(classes.cartZoom);
      };

      cartRef.current.addEventListener("animationend", animationEndHandler);

      return () => {
        if (cartRef.current) {
          cartRef.current.removeEventListener(
            "animationend",
            animationEndHandler
          );
        }
      };
    }
  }, [itemCounter]);

  return (
    <nav className="nav">
      <header className="navHeader">
        <Row className={classes.NavSx}>
          <NavLink to="/">
            <img src={logo} alt="DB logo" className="logo" />
          </NavLink>
          <NavLink to="/" className={classes.home}>
            <div className={classes.NavHome}>Home</div>
          </NavLink>
        </Row>
        <NavLink
          to="/cart"
          className={classes.NavLinkCart}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <div className="navCartWrapper">
            <div className="navCart">
              <HiShoppingCart className={classes.cartIcon + " icon nav-icon"} />
              <b className={classes.cartNumText}>Cart</b>
              {!isLoading && (
                <div ref={cartRef} className={classes.cartNum}>
                  {itemCounter}
                </div>
              )}
            </div>{" "}
            {isLoggedIn && (
              <NavLink to="/logout" className="logout">
                Logout
              </NavLink>
            )}
          </div>
        </NavLink>
      </header>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div
          className={`${classes.navCart}  ${
            isHovered ? classes.navCartVisible : ""
          }`}
        >
          <h6>Your cart:</h6>
          <br />
          {cart.length === 0 ? (
            <p style={{fontSize:'13px'}}>Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => {
                return <CartItemNav key={item._id} {...item} />;
              })}
              <div className={`${classes.navCartTotal}`} >
                <p><b>Total</b></p>
                <p>€ {formattedTotal}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
