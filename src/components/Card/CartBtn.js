import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const CartBtn = (props) => {
  return (
    <Row className="text-center">
      <Col>
        <Button
          style={{
            backgroundColor: "purple",
            border: "none",
            fontSize: "1.1rem",
          }}
          className="mb-3 p-3"
          onClick={props.onClick}
        >
          See the cart
        </Button>
      </Col>
    </Row>
  );
};

export default CartBtn;
