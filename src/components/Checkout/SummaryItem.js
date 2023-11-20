import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import formatNumber from "../../utils/formatNumber";

const SummaryItem = ({ _id, image, name, price, countInStock, qty }) => {
  const {
    addQty,
    dimQty,
    setShowModal,
    setSelectedId,
    setTypeDelete,
    setConfirmMsg,
  } = useGlobalContext();

  const [total, setTotal] = useState(price * qty);

  const decrease = (id) => {
    if (qty - 1 <= 0) {
      setConfirmMsg("Delete this Item?");
      setTypeDelete(1);
      setShowModal(true);
      setSelectedId(id);
    } else {
      setTotal((prevTotal) => prevTotal - price);
      return dimQty(id);
    }
  };

  const add = (id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    setTotal((prevTotal) => prevTotal + price);
    return addQty(id);
  };

  const deleteHandle = (id) => {
    setConfirmMsg("Delete this Item?");
    setTypeDelete(1);
    setSelectedId(id);
    setShowModal(id);
  };

  const formattedPrice = formatNumber(price);
  const formattedTotal = formatNumber(total);

  return (
    <article className="cart-item">
      <div className="imgContainer">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="productName">{name}</p>
      <div className="qty-selector">
        <ButtonGroup>
          <p> {qty} </p>
        </ButtonGroup>
      </div>
      <p className="center">€ {formattedPrice}</p>
      <p>€ {formattedTotal}</p>
    </article>
  );
};

export default SummaryItem;
