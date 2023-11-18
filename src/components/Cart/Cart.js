import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import CartItem from "./CartItem";
import ConfirmModal from "./ConfirmModal";
import { useGlobalContext } from "../../context/context";
import classes from "./Cart.module.css";

const Cart = () => {
  const {
    cart,
    deleteAll,
    showModal,
    setShowModal,
    deleteItem,
    selectedId,
    typeDelete,
    setTypeDelete,
    confirmMsg,
    setConfirmMsg,
  } = useGlobalContext();

  const deleteAllHandle = () => {
    setConfirmMsg("Delete all items in cart?");
    setTypeDelete(2);
    setShowModal(true);
  };

  const confirmHandle = () => {
    if (typeDelete === 1) {
      deleteItem(selectedId);
      setShowModal(false);
    } else if (typeDelete === 2) {
      setShowModal(false);
      return deleteAll();
    }
  };

  return (
    <section className={`${classes.cartContainer} section-center`}>
      <ConfirmModal
        showModal={showModal}
        msg={confirmMsg}
        onConfirm={confirmHandle}
      />
      <div className={classes.dataContainer}>
      <div className="cart-info">
        <h6>Item</h6>
        <h6 className="prd-name">Description</h6>
        <h6>Qty</h6>
        <h6>Price</h6>
        <h6>Total</h6>
        <button className="btn icon-btn" onClick={deleteAllHandle}>
          <MdRemoveShoppingCart className="icon minus-icon" />
        </button>
      </div>
      <hr />
      <section className="cart-section">
        {cart.map((item) => {
          return <CartItem key={item._id} {...item} />;
        })}
      </section>
      </div>
    </section>
  );
};

export default Cart;
