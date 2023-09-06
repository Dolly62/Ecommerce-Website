import React, { useContext, useEffect, useState } from "react";

import { Table, Col, Row, CloseButton } from "react-bootstrap";
// import albumone from "../img/albumone.png";
// import albumtwo from "../img/albumtwo.png";
// import albumthree from "../img/albumthree.png";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import Cart from "./Cart";
import AuthContext from "../../store/Auth-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  const totalAmount = cartCtx.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const cartItemAddHandler = (itemm) => {
    cartCtx.addItem(itemm);
    // console.log(itemm);
  };
  const cartItemRemoveHandler = (itemid) => {
    cartCtx.removeItem(itemid);
  };

  const fetchData = async () => {
    const userEmail = authCtx.userEmail.replace(/[@.]/g, "");

    try {
      const response = await fetch(
        `https://crudcrud.com/api/8099f018d7d04edcb08f63350a594aca/cart${userEmail}`
      );
      console.log(response.status);
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to get");
      }

      const data = await response.json();
      console.log(data);
      setCartData(data)
      // cartCtx.setCartItem(data.items)
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  

  useEffect(() => {
    if (props.onShowCart ) {
      fetchData();
    }
  }, [props.onShowCart]);

  // const cartElements = [
  //   {
  //     title: "Colors",
  //     price: 100,
  //     imageUrl: albumone,
  //     quantity: 2,
  //   },
  //   {
  //     title: "Black and white Colors",
  //     price: 50,
  //     imageUrl: albumtwo,
  //     quantity: 3,
  //   },
  //   {
  //     title: "Yellow and Black Colors",
  //     price: 70,
  //     imageUrl: albumthree,
  //     quantity: 1,
  //   },
  // ];

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
          {cartData && cartData.length > 0 ? (
            cartData.map((itemm) => (
              <Cart
                key={itemm.id}
                title={itemm.title}
                quantity={itemm.quantity}
                imageUrl={itemm.imageUrl}
                onAdd={cartItemAddHandler.bind(null, itemm)}
                onRemove={cartItemRemoveHandler.bind(null, itemm.id)}
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
            <td style={{ fontSize: "1.3rem" }}>Rs.{totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
};

export default CartItem;
