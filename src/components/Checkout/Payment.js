import React, { useContext } from "react";
import NotLogged from "../Checkout/NotLogged";
import { AuthContext } from "../../context/authContext";
import { useGlobalContext } from "../../context/context";
import classes from "./Checkout.module.css";

const Payment = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { cart, total } = useGlobalContext();
  const { shippingData } = useContext(AuthContext);

  const { name, surname, city, address, tel, email } = shippingData;

  console.log("Nome:", name);
  console.log("Cognome:", surname);
  console.log("Città:", city);
  console.log("Indirizzo:", address);
  console.log("tel:", tel);
  console.log("Email:", email);

  return (
    <div className={classes.page}>
      <div className={classes.pageContainer}>
        {isLoggedIn ? (
          <>
            <h2 className={classes.titleSection}>Payment</h2>Payment {name}{" "}
            {surname} {total}
          </>
        ) : (
          <NotLogged />
        )}
      </div>
    </div>
  );
};

export default Payment;
