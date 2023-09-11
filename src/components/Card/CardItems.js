import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import albumone from "../img/albumone.png";
import albumtwo from "../img/albumtwo.png";
import albumthree from "../img/albumthree.png";
import albumfour from "../img/albumfour.png";
import CartBtn from "./CartBtn";
import AddCartBtn from "./AddCartBtn";
import CartContext from "./../../store/cart-context";
import { Link } from "react-router-dom";
import AuthContext from "../../store/Auth-context";

const CardItems = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const productsArr = [
    {
      id: 102,
      title: "Colors",
      price: 100,
      imageUrl: albumone,
    },
    {
      id: 231,
      title: "Black and white Colors",
      price: 50,
      imageUrl: albumtwo,
    },
    {
      id: 378,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: albumthree,
    },
    {
      id: 434,
      title: "Blue Color",
      price: 100,
      imageUrl: albumfour,
    },
  ];

  //ADDING ITEM
  const addItemsHandler = async (product) => {
    // // console.log("clicked");

    // const userEmail = authCtx.userEmail.replace(/[@.]/g, "");
    // // console.log(userEmail);
    // try {
    //   const existingCartItem = cartCtx.items.find(
    //     (item) => item.id === product.id
    //   );

    //   if (existingCartItem) {
    //     console.log(existingCartItem._id);
    //     const response = await fetch(
    //       `https://crudcrud.com/api/05c33d4ab6174bdcab8fe28101e77684/cart${userEmail}/${existingCartItem._id}`,
    //       {
    //         method: "PUT",
    //         body: JSON.stringify({
    //           id: existingCartItem.id,
    //           title: existingCartItem.title,
    //           quantity: existingCartItem.quantity + 1,
    //           price: (existingCartItem.quantity + 1) * existingCartItem.price,
    //           imageUrl: existingCartItem.imageUrl,
    //         }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     console.log(response);
    //     console.log(response.status);

    //     if (!response.ok) {
    //       const data = await response.json();
    //       console.log(data);
    //       throw new Error("Failed to update quantity");
    //     }

    //     cartCtx.addItem({
    //       id: existingCartItem.id,
    //       title: existingCartItem.title,
    //       quantity: existingCartItem.quantity + 1,
    //       price: (existingCartItem.quantity + 1) * existingCartItem.price,
    //       imageUrl: existingCartItem.imageUrl,
    //     });

    //     // console.log({
    //     //   id: existingCartItem.id,
    //     //   title: existingCartItem.title,
    //     //   quantity: existingCartItem.quantity + 1,
    //     //   price: existingCartItem.price,
    //     //   imageUrl: existingCartItem.imageUrl,
    //     // });

    //   } else {
    //     const response = await fetch(
    //       `https://crudcrud.com/api/05c33d4ab6174bdcab8fe28101e77684/cart${userEmail}`,
    //       {
    //         method: "POST",
    //         body: JSON.stringify({
    //           id: product.id,
    //           title: product.title,
    //           quantity: 1,
    //           price: product.price,
    //           imageUrl: product.imageUrl,
    //           totalAmount: product.price,
    //         }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     if (!response.ok) {
    //       const data = await response.json();
    //       console.log(data);
    //       throw new Error("Failed to add item");
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //     console.log(data._id);
    //     cartCtx.addItem({
    //       _id: data._id,
    //       id: data.id,
    //       title: data.title,
    //       quantity: 1,
    //       price: data.price,
    //       imageUrl: data.imageUrl,
    //     });
    //     // console.log({
    //     //   _id: data._id,
    //     //   id: data.id,
    //     //   title: data.title,
    //     //   quantity: 1,
    //     //   price: data.price,
    //     //   imageUrl: data.imageUrl,
    //     // });
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <Fragment>
      <Container className="text-center" style={{ width: "50rem" }}>
        <Row className="m-5">
          <Col>
            <h3>Music</h3>
          </Col>
        </Row>
        <Row className="m-5">
          {productsArr.map((product) => (
            <Col lg={6} md={6} xs={12} key={product.id} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Text>${product.price}</Card.Text>
                  <AddCartBtn onadditem={() => addItemsHandler(product)} />
                  <Link to={`/store/${product.id}`}>
                    <Button
                      className="mx-2"
                      style={{ backgroundColor: "purple", border: "none" }}
                    >
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <CartBtn onClick={props.onShowCart} />
      </Container>
    </Fragment>
  );
};

export default CardItems;
