import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HiShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "../../context/context";
import classes from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addCart } = useGlobalContext();
  const handleAddToCart = () => {
    addCart(product);
  };
  const integerPart = Math.floor(product.price);
  const decimalPart = (product.price % 1).toFixed(2).substring(2);

  return (
    <Card className={classes.card + " w-100"}>
      <Card.Img variant="top" src={product.image} className={classes.img} />
      <Card.Body>
        <Card.Title className={classes.cardTitle}>{product.name}</Card.Title>
        <Card.Text className={classes.cardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
        <Card.Text className={classes.cardPrice}>
          € <span className={classes["price"]}>{integerPart}.</span>
          <span className={classes["decimal-part"]}>{decimalPart}</span>
          {}
        </Card.Text>
        <Button
          variant="primary"
          onClick={handleAddToCart}
          className={classes.cardButton}
        >
          <HiShoppingCart className="icon nav-icon" /> Add cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
