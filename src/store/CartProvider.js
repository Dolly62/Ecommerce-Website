import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (itemm) => {
    // console.log(itemm)
    const existingItemIndex = cartItem.findIndex(
      (item) => item.id === itemm.id
    );

    if (existingItemIndex !== -1) {
      // console.log("exist")
        alert("Item already exist")
        return;
    }
    setCartItem((prevItems) => [...prevItems, itemm])
    setTotalAmount((prevTotalAmount) => prevTotalAmount + itemm.price);
  };

  const removeItemToCartHandler = (itemid) => {
    const itemToRemove = cartItem.find((item) => item.id === itemid);

    if (itemToRemove.quantity === 1) {
      setCartItem((prevItems) =>
        prevItems.filter((item) => item.id !== itemid)
      );
    } 
    setTotalAmount((prevTotalAmount) => prevTotalAmount - itemToRemove.price)
  };

  const cartContext = {
    items: cartItem,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
