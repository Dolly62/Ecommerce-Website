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
  // const [cartData, setCartData] = useState([]);

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

  // const fetchData = async () => {
    
  
  //   const userEmail = authCtx.userEmail.replace(/[@.]/g, "");

  //   try {
  //     const response = await fetch(
  //       `https://crudcrud.com/api/05c33d4ab6174bdcab8fe28101e77684/cart${userEmail}`
  //     );
  //     // console.log(response.status);
  //     // console.log(response);

  //     if (!response.ok) {
  //       throw new Error("Failed to get");
  //     }

  //     const data = await response.json();
  //     // const filteredData = data.filter((item) => {
  //     //   return !cartCtx.items.some((cartItem) => cartItem._id === item._id);
  //     // });
  //     console.log(data);
  //     // setCartData(data);
  //     data.forEach((item) => {
  //       cartCtx.addItem({
  //         id: item.id,
  //         title: item.title,
  //         quantity: item.quantity,
  //         price: item.price,
  //         imageUrl: item.imageUrl,
  //       });
  //     });

  //     // cartCtx.addItem({
  //     //   id: data.id,
  //     //   title: data.title,
  //     //   quantity: data.quantity,
  //     //   price: data.price,
  //     //   imageUrl: data.imageUrl,
  //     // })
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.message);
  //   }
  // };

  // useEffect(() => {
  //   // if (props.onShowCart) {
  //   fetchData();
  //   // }
  // }, []);

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
            <td style={{ fontSize: "1.3rem" }}>Rs.{totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </Table>
    </Modal>
  );
};

export default CartItem;
