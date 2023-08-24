import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const count = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
  // console.log(cartCtx.items);
  return (
    <Button
      className=" px-4 p-3"
      style={{
        backgroundColor: "blueviolet",
        border: "none",
        fontSize: "1.1rem",
      }}
      onClick={props.onClick}
    >
      <span>Cart</span>
      <span>{count}</span>
    </Button>
  );
};

export default CartButton;
