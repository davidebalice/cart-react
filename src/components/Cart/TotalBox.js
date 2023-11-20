import React from "react";
import { useGlobalContext } from "../../context/context";
import formatNumber from "../../utils/formatNumber";
import classes from "./Cart.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const TotalBox = () => {
  const { total } = useGlobalContext();
  return (
    <section
      className={`${classes.cartContainer} total-section section-center mb-5`}
    >
      <div className={`${classes.totalContainer} card w-100`}>
        <div className={classes.totalBox}>
          <div className="card-content">
            <h4> Total </h4>
          </div>
          <div className="card-content">
            <h4>€ {formatNumber(total.toFixed(2))}</h4>
          </div>
        </div>

        <div className={classes.totalFooter}>
          <NavLink to="/login">
            <Button variant="primary" className={classes.checkoutButton}>
              Checkout
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TotalBox;
