import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CartBottom from "../components/CartBottom";
import ProductContainer from "../components/ProductContainer";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { cart, itemCounter } = useGlobalContext();
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
      <p>cart</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} {item.qty}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
