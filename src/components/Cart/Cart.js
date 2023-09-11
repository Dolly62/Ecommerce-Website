import React from "react";
import { Button } from "react-bootstrap";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <tr>
      <td>
        <img
          src={props.imageUrl}
          alt={props.title}
          width="90"
          height="90"
          className="rounded"
        />
        {props.title}
      </td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>
        <button className={classes.cartBtn} onClick={props.onRemove}>Remove</button>
      </td>
    </tr>
  );
};

export default Cart;
