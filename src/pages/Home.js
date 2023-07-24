import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import CartBottom from "../components/Cart/CartBottom";
import ProductContainer from "../components/Cart/ProductContainer";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { itemCounter } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (itemCounter >= 1) {
      setIsVisible(true);
    }
  }, [itemCounter]);

  return (
    <div>
      <Navbar />
      {isVisible && <CartBottom />}
      <ProductContainer />
    </div>
  );
};

export default Home;
