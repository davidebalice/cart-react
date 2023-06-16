import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CartItem = ({ _id, image, name, price, countInStock, qty }) => {
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

  const formattedPrice = price.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
  const formattedTotal = total.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });

  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>
      <div className="qty-selector">
        <ButtonGroup>
          <Button className="plusButton" onClick={() => add(_id)}>
            <BiPlus className="icon" />
          </Button>
          <Button variant="white" className="qtyButton">
            <p> {qty} </p>
          </Button>
          <Button className="plusButton" onClick={() => decrease(_id)}>
            <BiMinus className="icon minus-icon" />
          </Button>
        </ButtonGroup>
      </div>
      <p>{formattedPrice}</p>
      <p>{formattedTotal}</p>
      <button className="btn icon-btn" onClick={() => deleteHandle(_id)}>
        <MdDelete className="icon minus-icon trashIcon" />
      </button>
    </article>
  );
};

export default CartItem;
