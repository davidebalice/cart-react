import React, { useContext } from "react";
import NotLogged from "../Checkout/NotLogged";
import { AuthContext } from "../../context/authContext";
import { useGlobalContext } from "../../context/context";
import SummaryItem from "./SummaryItem";
import classes from "./Checkout.module.css";
import SummaryTotal from "./SummaryTotal";

const Summary = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { cart, total } = useGlobalContext();

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            <section className={`${classes.cartContainer} section-center`}>
              <h2 className={classes.titleSection}>Order summary</h2>
              <div className="cart-info">
                <h6>Item</h6>
                <h6 className="prd-name">Description</h6>
                <h6>Qty</h6>
                <h6>Price</h6>
                <h6>Total</h6>
              </div>
              <hr />
              <section className="cart-section">
                {cart.map((el) => {
                  return <SummaryItem key={el._id} {...el} />;
                })}
              </section>
              {total > 0 && <SummaryTotal />}
            </section>
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Summary;
