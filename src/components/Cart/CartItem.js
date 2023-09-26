import React, { useContext } from "react";

import { Table, Col, Row, CloseButton } from "react-bootstrap";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import Cart from "./Cart";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = (cartCtx.items || []).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const cartItemAddHandler = (itemm) => {
    cartCtx.addItem(itemm);
    // console.log(itemm);
  };
  const cartItemRemoveHandler = (itemid) => {
    cartCtx.removeItem(itemid);
  };


  return (
    <Modal onHideCart={props.onHideCart}>
      <Row className="text-center m-3">
        <Col>
          <h3>Cart</h3>
        </Col>
        <CloseButton onClick={props.onHideCart} />
      </Row>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartCtx.items && cartCtx.items.length > 0 ? (
            cartCtx.items.map((cartItem) => (
              <Cart
                key={cartItem.id}
                title={cartItem.title}
                quantity={cartItem.quantity}
                price={cartItem.price}
                imageUrl={cartItem.imageUrl}
                onAdd={cartItemAddHandler.bind(null, cartItem)}
                onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Cart is empty</td>
            </tr>
          )}
          <tr>
            <td style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
              Total Amount:
            </td>
            <td style={{ fontSize: "1.3rem" }}>${totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
};

export default CartItem;
