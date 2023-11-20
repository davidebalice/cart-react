import React, { useContext, useState } from "react";
import NotLogged from "./NotLogged";
import { AuthContext } from "../../context/authContext";
import { useGlobalContext } from "../../context/context";
import classes from "./Checkout.module.css";
import classes2 from "../Cart/Cart.module.css";
import SummaryItem from "./SummaryItem";
import formatNumber from "../../utils/formatNumber";
import Button from "react-bootstrap/Button";

const Confirm = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { cart, total, deleteAll } = useGlobalContext();
  const { shippingData } = useContext(AuthContext);
  const { name, surname, city, address, tel, email } = shippingData;

  const [order, setOrder] = useState({
    userData: {
      name: '',
      surname: '',
      address: '',
      city: '',
      tel: '',
      email: '',
    },
    cartItems: [],
    total: 0,
    placed: false
  });

  const createOrder = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      cartItems: cart,
      userData: shippingData,
      total: total,
      placed: true
    }));
    deleteAll();
  };

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            {order.placed ? (<p style={{textAlign:'center'}}><br /><h4>Order placed</h4></p>)
            :
            (<> <h2 className={classes.titleSection}>Confirm order</h2>

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

            {total > 0 && (<section
                className={`${classes2.cartContainer} total-section section-center`}
              >
                <div className={`${classes2.totalContainer} card w-100`}>
                  <div className={classes2.totalBox}>
                    <div className="card-content">
                      <h4> Total </h4>
                    </div>
                    <div className="card-content">
                      <h4>€ {formatNumber(total)}</h4>
                    </div>
                  </div>

                  <div className={classes2.totalFooter}>
                      <Button variant="primary" className={classes2.checkoutButton} onClick={createOrder}>
                        Confirm
                      </Button>
                  </div>
                </div>
              </section>)}
            <br />
            <br /></>) 
            }
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Confirm;
