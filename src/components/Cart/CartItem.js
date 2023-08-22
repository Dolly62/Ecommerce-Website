import React from "react";
import {
  Container,
  Table,
  Col,
  Row,
  Card,
  Button,
  CloseButton,
} from "react-bootstrap";
import albumone from "../img/albumone.png";
import albumtwo from "../img/albumtwo.png";
import albumthree from "../img/albumthree.png";

const CartItem = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl: albumone,
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: albumtwo,
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: albumthree,
      quantity: 1,
    },
  ];
  return (
    <Container style={{ position:"fixed", top:"10%", right:"10%" }}>
      <Card style={{ width: '30rem', background: "grey"}}>
        <Row className="text-center m-3">
          <Col>
            <h3>Cart</h3>
          </Col>
          <Col>
            <CloseButton onClick={props.onHideCart}/>
          </Col>
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
            {cartElements.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    width="90"
                    height="90"
                    className="rounded"
                  />
                  {item.title}
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default CartItem;
