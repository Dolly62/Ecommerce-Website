import React from "react";
import { Button } from "react-bootstrap";

const AddCartBtn = (props) => {
  const onAddingItem = () => {
    // console.log(props);
    props.onadditem(props.product);
  };

  return (
    <Button
      style={{ backgroundColor: "purple", border: "none" }}
      onClick={onAddingItem}
    >
      Add to cart
    </Button>
  );
};

export default AddCartBtn;
