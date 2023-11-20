import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import CartBottom from "../components/Cart/CartBottom";
import Slideshow from "../components/Slideshow/Slideshow";
import Text from "../components/Text/Text";
import Footer from "../components/Footer/Footer";
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
      <CartBottom isVisible={isVisible} />
      <Slideshow />
      <Text />
      <ProductContainer />
      <Footer />
    </div>
  );
};

export default Home;
