import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shippingData, setShippingData] = useState({
    name: "",
    surname: "",
    address: "",
    city: "",
    email: "",
    tel: "",
    shippingOption: "",
    shippingPrice: "",
  });

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, shippingData, setShippingData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
