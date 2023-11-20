import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import classes from "./Cart.module.css";

const CartBottom = ({ isVisible }) => {
  const { itemCounter } = useGlobalContext();
  return (
    <div
      className={`${classes.CartBottom} ${isVisible ? classes.CartBottomVisible : ""}`}
    >
      <NavLink to="/cart" className={classes.NavLink}>
        <div className={classes.cartButton}>
          <HiShoppingCart className={`${classes.cartIcon} icon nav-icon`} />
          <div className={classes.cartText}> go to cart</div>
          <div className={classes.cartNum}>{itemCounter}</div>
        </div>{" "}
      </NavLink>
    </div>
  );
};

export default CartBottom;
