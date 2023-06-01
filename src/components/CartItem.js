import React from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useGlobalContext } from "../context/context";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const CartItem = ({ _id, image, name, price, countInStock, qty }) => {
  const { deleteItem, addQty, dimQty } = useGlobalContext();

  const diminuisciQty = (id) => {
    if (qty - 1 <= 0) {
      deleteItem(id);
    } else {
      return dimQty(id);
    }
  };

  const aggiungiQty = (id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(id);
  };

  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>
      <div className="qty-selector">
        <ButtonGroup>
          <Button className="plusButton" onClick={() => aggiungiQty(_id)}>
            <BiPlus className="icon" />
          </Button>
          <Button variant="white" className="qtyButton">
            <p> {qty} </p>
          </Button>
          <Button className="plusButton" onClick={() => diminuisciQty(_id)}>
            <BiMinus className="icon minus-icon" />
          </Button>
        </ButtonGroup>
      </div>
      <p>{price} €</p>
      <button className="btn icon-btn" onClick={() => deleteItem(_id)}>
        <MdDelete className=" icon minus-icon" />
      </button>
    </article>
  );
};

export default CartItem;
