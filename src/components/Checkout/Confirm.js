import React, { useContext, useState } from "react";
import NotLogged from "./NotLogged";
import { AuthContext } from "../../context/authContext";
import { useGlobalContext } from "../../context/context";
import classes from "./Checkout.module.css";
import SummaryItem from "./SummaryItem";
import SummaryTotal from "./SummaryTotal";

const Confirm = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { cart, total } = useGlobalContext();
  const { shippingData } = useContext(AuthContext);
  const { name, surname, city, address, tel, email } = shippingData;

  const [order, setOrder] = useState([]);

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            <h2 className={classes.titleSection}>Confirm order</h2>

            <p>
              <b>Shipping data:</b>
            </p>

            <br />

            <div className={classes.dataContainer}>
              <div className={classes.shippingdataRow}>
                <p className={classes.shippingdataCol1}>Name</p>
                <p className={classes.shippingdataCol2}>{name}</p>
              </div>

              <div className={classes.shippingdataRow}>
                <p className={classes.shippingdataCol1}>Surname</p>
                <p className={classes.shippingdataCol2}>{surname}</p>
              </div>

              <div className={classes.shippingdataRow}>
                <p className={classes.shippingdataCol1}>City</p>
                <p className={classes.shippingdataCol2}>{city}</p>
              </div>

              <div className={classes.shippingdataRow}>
                <p className={classes.shippingdataCol1}>Address</p>
                <p className={classes.shippingdataCol2}>{address}</p>
              </div>

              <div className={classes.shippingdataRow}>
                <p className={classes.shippingdataCol1}>Tel</p>
                <p className={classes.shippingdataCol2}>{tel}</p>
              </div>

              <div className={classes.shippingdataRow}>
                <p className={classes.shippingdataCol1}>Email</p>
                <p className={classes.shippingdataCol2}>{email}</p>
              </div>
            </div>

            <br />
            <br />

            <p>
              <b>Products:</b>
            </p>

            <br />
            <div className={classes.dataContainer}>
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
            </div>

            {total > 0 && <SummaryTotal />}
            <br />
            <br />
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Confirm;
