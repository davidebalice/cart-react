import React from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import CartItem from "./CartItem";
import ConfirmModal from "./ConfirmModal";
import { useGlobalContext } from "../context/context";
const Cart = () => {
  const { products, deleteAll, showModal } = useGlobalContext();
  console.log('showModal');
  console.log(showModal);
  return (
    <section className="section-center" style={{ marginTop: "2rem" }}>
      <ConfirmModal
        showModal={showModal}
        message="ciao"
        onConfirm={deleteAll}
        onCancel={deleteAll}
      />
      <div className="cart-info">
        <h6>Item</h6>
        <h6 className="prd-name">Nome</h6>
        <h6>Qty</h6>
        <h6>Prezzo</h6>
        <button className="btn icon-btn" onClick={deleteAll}>
          <MdRemoveShoppingCart className="icon minus-icon" />
        </button>
      </div>
      <hr />
      <section className="cart-section">
        {products.map((el) => {
          return <CartItem key={el._id} {...el} />;
        })}
      </section>
    </section>
  );
};

export default Cart;
