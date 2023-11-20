import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import formatNumber from "../../utils/formatNumber";

const CartItemNav = ({ _id, image, name, price, countInStock, qty }) => {
  const [total, setTotal] = useState(price * qty);
  const formattedTotal = formatNumber(total);

  useEffect(() => {
    setTotal(price * qty);
  }, [qty]);

  return (
    <article className="cartItemNav">
      <div className="imgContainerNav">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="productNameNav">
        {name}
        <div className="qtyContainerNav">
          <p className="qtyNav">Qty: {qty}</p>
          <p className="qtyNav">€ {formattedTotal}</p>
        </div>
      </div> 
    </article>
  );
};

export default CartItemNav;
