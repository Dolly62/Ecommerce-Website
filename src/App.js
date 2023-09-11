import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CardItems from "./components/Card/CardItems";
import Header from "./components/Navbar/Header";
import CartItem from "./components/Cart/CartItem";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import About from "./components/About/About";
import Heading from "./components/Navbar/Heading";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductDetails from "./components/Card/ProductDetails";
import Login from "./components/Auth/Login";
import AuthContext from "./store/Auth-context";
import { Redirect } from "react-router-dom";
import CartContext from "./store/cart-context";

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);
  const authCtx = useContext(AuthContext);
  // const cartCtx = useContext(CartContext);


  const isLoggedIn = authCtx.isLoggedIn;

  // useEffect(() => {
  //   const fetchCartItems = async() => {
  //     const userEmail = authCtx.userEmail.replace(/[@.]/g, "");
  //     try {
  //       const response = await fetch(`https://crudcrud.com/api/8099f018d7d04edcb08f63350a594aca/cart${userEmail}`);
  
  //       if(!response.ok) {
  //         throw new Error("Failed to fetch")
  //       }
  
  //       const data = await response.json();
  //       console.log(data);
  //       cartCtx.addItem(data);
  //     } catch(error) {
  //       alert(error.message);
  //     }
  //   }
  //   fetchCartItems();
  // }, [authCtx.userEmail, cartCtx])

  const showCartItemHandler = () => {
    setCartItemShown(true);
    // fetchCartItems();
  };

  const hideCartItemHandler = () => {
    setCartItemShown(false);
  };


  async function addInputHandler(form) {
    const response = await fetch(
      "https://react-http-7f6ba-default-rtdb.firebaseio.com/forminfo.json",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  }
  

  return (
    <CartProvider>
      {cartItemShown && <CartItem onShowCart={showCartItemHandler} onHideCart={hideCartItemHandler} />}
      <Header onShowCart={showCartItemHandler} />
      <Heading />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          {isLoggedIn && (<CardItems onShowCart={showCartItemHandler} />)}
          {!isLoggedIn && <Redirect to='/login'/>}
        </Route>
        <Route path="/store/:productId">
          <ProductDetails />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/contactUs">
          <ContactUs onAddContact={addInputHandler} />
        </Route>
      </Switch>
      {/* <CardItems onShowCart={showCartItemHandler} /> */}
      <Footer />
    </CartProvider>
  );
}

export default App;
