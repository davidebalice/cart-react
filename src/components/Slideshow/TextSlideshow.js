import React from "react";
import logo from "../../assets/react.png";
import classes from "./Slideshow.module.css";

const TextSlideshow = () => {
  return (
    <div className={classes.textContainer}>
      {" "}
      Example of basic implementations of a Cart and Checkout with React's hook
      useContext and useReducer.
      <br />
      <div className={classes.logoContainer}>
      <img src={logo} className={classes.logo} alt="react" />
      </div>
    </div>
  );
};

export default TextSlideshow;
