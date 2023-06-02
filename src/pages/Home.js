import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useGlobalContext } from "../context/context";

// const [cartItems, setCartItems] = useState([]);
//const [cartTotal, setCartTotal] = useState(0);

const Home = () => {
  const { cart, addCart } = useGlobalContext();
  const [products, setProducts] = useState([]);
  const url = "https://www.aroundweb.it/cart-react/products.json";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const productArray = response.data;
        setProducts(productArray.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <br />
            <button onClick={() => addCart(product)}>add cart</button>
          </li>
        ))}
      </ul>
      <p>cart</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}   {item.qty}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
