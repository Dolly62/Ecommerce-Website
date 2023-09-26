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
  const addItemsHandler = (product) => {
    // console.log("clicked");
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
