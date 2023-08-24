import React, { useState } from "react";

import CardItems from "./components/Card/CardItems";
import Header from "./components/Navbar/Header";
import CartItem from "./components/Cart/CartItem";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);

  const showCartItemHandler = () => {
    setCartItemShown(true);
  };

  const hideCartItemHandler = () => {
    setCartItemShown(false);
  };

  return (
    <CartProvider>
      {cartItemShown && <CartItem onHideCart={hideCartItemHandler} />}
      <Header onShowCart={showCartItemHandler} />
      <CardItems onShowCart={showCartItemHandler} />
      <Footer />
    </CartProvider>
  );
}

export default App;
