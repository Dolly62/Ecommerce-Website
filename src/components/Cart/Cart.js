import React from "react";
import { Button } from "react-bootstrap";

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
        <Button onClick={props.onRemove} style={{ backgroundColor: "purple", border: "none", fontSize: "1.1rem" }}>Remove</Button>
      </td>
    </tr>
  );
};

export default Cart;
