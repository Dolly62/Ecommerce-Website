import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardItems from "./components/Card/CardItems";
import Header from "./components/Navbar/Header";
import CartItem from "./components/Cart/CartItem";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import About from "./components/About/About";
import Heading from "./components/Navbar/Heading";
import Home from "./components/Home/Home";


function App() {
  const [cartItemShown, setCartItemShown] = useState(false);

  const showCartItemHandler = () => {
    setCartItemShown(true);
  };

  const hideCartItemHandler = () => {
    setCartItemShown(false);
  };

  return (
    <Router>
    <CartProvider>
      {cartItemShown && <CartItem onHideCart={hideCartItemHandler} />}
      <Header onShowCart={showCartItemHandler} />
      <Heading/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/store" element={<CardItems onShowCart={showCartItemHandler} />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      {/* <CardItems onShowCart={showCartItemHandler} /> */}
      <Footer />
    </CartProvider>
    </Router>
  );
}

export default App;
