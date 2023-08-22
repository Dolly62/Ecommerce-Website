import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import albumone from "../img/albumone.png";
import albumtwo from "../img/albumtwo.png";
import albumthree from "../img/albumthree.png";
import albumfour from "../img/albumfour.png";

const CardItems = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl: albumone,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: albumtwo,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: albumthree,
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl: albumfour,
    },
  ];
  return (
    <>
      <Container className="justify-content-center" style={{ width: "50rem"}}>
        <Row className="m-4 text-center">
          {productsArr.map((product, index) => (
            <Col lg={6} md={6} xs={12} key={index} className="mb-4">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardItems;
