import React from "react";
import { Button } from "react-bootstrap";

const AddCartBtn = (props) => {
  const onAddingItem = () => {
    props.onadditem(props.product);
  };

  return (
    <Button
      style={{ backgroundColor: "blueviolet", border: "none" }}
      onClick={onAddingItem}
    >
      Add to cart
    </Button>
  );
};

export default AddCartBtn;
