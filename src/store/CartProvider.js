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
      alert("Item already exist");
      return;
    }
    setCartItem((prevItems) => [...prevItems, itemm]);
    setTotalAmount((prevTotalAmount) => prevTotalAmount + itemm.price);
  };

  const removeItemToCartHandler = (itemid) => {
    const itemToRemove = cartItem.find((item) => item.id === itemid);

    if (itemToRemove.quantity === 1) {
      setCartItem((prevItems) =>
        prevItems.filter((item) => item.id !== itemid)
      );
    }
    setTotalAmount((prevTotalAmount) => prevTotalAmount - itemToRemove.price);
  };

  // const removeFromBackend = async (itemid) => {
  //   try {
  //     const response = await fetch(
  //       `https://crudcrud.com/api/2b4eeefdb5424708800176e82b4bd4ed/cart/${itemid}`,
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to remove an item");
  //     }
  //     removeItemToCartHandler(itemid);
  //   } catch (error) {
  //     alert(error.message);
  //     console.log(error);
  //   }
  // };

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
