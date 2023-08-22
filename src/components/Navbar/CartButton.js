import React from "react";
import { Button } from "react-bootstrap";

const CartButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <span>Cart</span>
      <span>0</span>
    </Button>
  );
};

export default CartButton;
