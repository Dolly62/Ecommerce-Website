import React from "react";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const AddCartBtn = (props) => {
  const [success, setSuccess] = useState(false);
  const onAddingItem = () => {
    // console.log(props);
    props.onadditem(props.product);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      console.log(success);
    }, 3000);
  };

  return (
    <>
      {success && (
        <Alert variant="success" className="mb-3">
          Item added to cart successfully!
        </Alert>
      )}
      <Button
        style={{ backgroundColor: "purple", border: "none" }}
        onClick={onAddingItem}
      >
        Add to cart
      </Button>
    </>
  );
};

export default AddCartBtn;
