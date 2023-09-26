import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // const [count, setCount] = useState(0);
  // console.log(count);

  // console.log(cartCtx.items);
  // useEffect(() => {
  //   const countLen = cartCtx.items.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );
  //   // if (props.onClick) {
  //     setCount(cartCtx.items.length);
  //     console.log(cartCtx.items.length);
  //   // }
  // }, [ cartCtx.items]);

  // console.log(cartCtx.items);
  // console.log(count)
  return (
    <Button
      className=" px-3 p-2"
      style={{
        backgroundColor: "purple",
        border: "none",
        fontSize: "1.1rem",
      }}
      onClick={props.onClick}
    >
      <span>Cart</span>
      <span>{cartCtx.items?.length || 0}</span>
    </Button>
  );
};

export default CartButton;
