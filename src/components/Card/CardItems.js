import React, { Fragment, useContext } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import albumone from "../img/albumone.png";
import albumtwo from "../img/albumtwo.png";
import albumthree from "../img/albumthree.png";
import albumfour from "../img/albumfour.png";
import CartBtn from "./CartBtn";
import AddCartBtn from "./AddCartBtn";
import CartContext from "./../../store/cart-context";
import { Link } from "react-router-dom";

const CardItems = (props) => {
  const cartCtx = useContext(CartContext);
  
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

  const addItemsHandler = (product) => {
    // console.log("clicked");
    // console.log({
    //   id: product.id,
    //   title: product.title,
    //   quantity: quantity,
    //   price: product.price,
    //   imageUrl: product.imageUrl
    // }
    // );
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
                <Link to={`/store/${product.id}`}>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Text>${product.price}</Card.Text>
                    <AddCartBtn onadditem={() => addItemsHandler(product)} />
                  </Card.Body>
                </Link>
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
