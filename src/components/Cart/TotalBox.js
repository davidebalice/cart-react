import React from "react";
import { useGlobalContext } from "../../context/context";
import formatNumber from "../../utils/formatNumber";
import classes from "./CartBottom.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const TotalBox = () => {
  const { total } = useGlobalContext();
  return (
    <section
      className={`${classes.cartContainer} total-section section-center`}
    >
      <div className={`${classes.totalContainer} card w-100`}>
        <div className={classes.totalBox}>
          <div className="card-content">
            <h4> Total </h4>
          </div>
          <div className="card-content">
            <h4>{formatNumber(total)}</h4>
          </div>
        </div>

        <div className={classes.totalFooter}>
          <NavLink to="/login">
            <Button variant="primary" className={classes.checkout}>
              Checkout
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TotalBox;
