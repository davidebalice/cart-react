import React from "react";
import Navbar from "../components/Navbar";
import ProductContainer from "../components/ProductContainer";
import { useGlobalContext } from "../context/context";

const Home = () => {
  const { cart } = useGlobalContext();
  return (
    <div>
      <Navbar />
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
