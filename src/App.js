import React, { Fragment, useState } from "react";

import CardItems from "./components/Card/CardItems";
import Header from "./components/Navbar/Header";
import CartItem from "./components/Cart/CartItem";

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);

  const showCartItemHandler = () => {
    setCartItemShown(true);
  };

  const hideCartItemHandler = () => {
    setCartItemShown(false);
  };

  return (
    <Fragment>
      {cartItemShown && <CartItem onHideCart={hideCartItemHandler} />}
      <Header onShowCart={showCartItemHandler} />
      <CardItems />
    </Fragment>
  );
}

export default App;
