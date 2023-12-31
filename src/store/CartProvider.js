import React, { useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import AuthContext from "./Auth-context";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const authCtx = useContext(AuthContext);

  const addItemToCartHandler = async (product) => {
    const userEmail = authCtx.userEmail.replace(/[@.]/g, "");

    try {
      const existingCartItem = cartItem.find((item) => item.id === product.id);

      if (existingCartItem) {
        console.log(existingCartItem._id);
        const response = await fetch(
          `https://crudcrud.com/api/a45986541acc4f57a474569765be407f/cart${userEmail}/${existingCartItem._id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              id: existingCartItem.id,
              title: existingCartItem.title,
              quantity: existingCartItem.quantity + 1,
              price: existingCartItem.price,
              imageUrl: existingCartItem.imageUrl,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update quantity");
        }
        setCartItem((prevItems) =>
          prevItems.map((item) =>
            item.id === existingCartItem.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        );
      } else {
        const response = await fetch(
          `https://crudcrud.com/api/a45986541acc4f57a474569765be407f/cart${userEmail}`,
          {
            method: "POST",
            body: JSON.stringify({
              id: product.id,
              title: product.title,
              quantity: 1,
              price: product.price,
              imageUrl: product.imageUrl,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add item");
        }

        const data = await response.json();
        setCartItem((prevItems) => [...prevItems, { ...data, _id: data._id }]);
      }
    } catch (error) {
      alert(error.message);
    }
    setTotalAmount((prevTotalAmount) => prevTotalAmount + product.price);
  };

  const fetchCartItems = async () => {
    const userEmail = authCtx.userEmail.replace(/[@.]/g, "");

    try {
      const response = await fetch(
        `https://crudcrud.com/api/a45986541acc4f57a474569765be407f/cart${userEmail}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      setCartItem(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      fetchCartItems();
    }
  }, [authCtx.isLoggedIn]);

  const removeItemToCartHandler = async (itemid) => {
    const userEmail = authCtx.userEmail.replace(/[@.]/g, "");
    const itemToRemove = cartItem.find((item) => item.id === itemid);

    if (!itemToRemove) {
      return;
    }

    try {
      if (itemToRemove.quantity === 1) {
        const response = await fetch(
          `https://crudcrud.com/api/a45986541acc4f57a474569765be407f/cart${userEmail}/${itemToRemove._id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete item");
        }

        setCartItem((prevItems) =>
          prevItems.filter((item) => item.id !== itemid)
        );
      } else {
        const response = await fetch(
          `https://crudcrud.com/api/a45986541acc4f57a474569765be407f/cart${userEmail}/${itemToRemove._id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              id: itemToRemove.id,
              title: itemToRemove.title,
              quantity: itemToRemove.quantity - 1,
              price:  itemToRemove.price ,
              imageUrl: itemToRemove.imageUrl,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete");
        }

        setCartItem((prevItems) =>
          prevItems.map((item) =>
            item.id === itemid
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
        );
      }
    } catch (error) {
      alert(error.message);
    }
    setTotalAmount((prevTotalAmount) => prevTotalAmount - itemToRemove.price);
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
