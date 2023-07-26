import React from "react";
import logo from "../../assets/react.png";
import classes from "./Text.module.css";

const Text = () => {
  return (
    <div className={classes.textContainer}>
      <h1 className={classes.title}>React Cart</h1> 
      Example of basic implementations of a Cart and
      Checkout 
      <br />
      with React's hook useContext and useReducer.
      <br />
      <div className={classes.logoContainer}></div>
    </div>
  );
};

export default Text;
