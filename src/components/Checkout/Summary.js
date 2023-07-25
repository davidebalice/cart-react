import React, { useContext } from "react";
import NotLogged from "../Checkout/NotLogged";
import { AuthContext } from "../../context/authContext";

const Summary = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      summary: {isLoggedIn}
      {isLoggedIn ? <div>loggato 1111</div> : <NotLogged />}
    </div>
  );
};

export default Summary;
