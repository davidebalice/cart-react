import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Summary = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      summary: {isLoggedIn}
      {isLoggedIn ? "loggato" : "non loggato"}
    </div>
  );
};

export default Summary;
