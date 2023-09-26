import React, { useContext, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CardItems from "./components/Card/CardItems";
import Header from "./components/Navbar/Header";
// import CartItem from "./components/Cart/CartItem";
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

function App() {
  const [cartItemShown, setCartItemShown] = useState(false);
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const CartItem = React.lazy(() => import("./components/Cart/CartItem"));
const CardItems = React.lazy(() => import("./components/Card/CardItems"));

  const showCartItemHandler = () => {
    setCartItemShown(true);
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
      <React.Suspense fallback={<div>Loading...</div>}>
        {cartItemShown && <CartItem onHideCart={hideCartItemHandler} />}
      </React.Suspense>
      <Header onShowCart={showCartItemHandler} />
      <Heading />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <React.Suspense fallback={<div>Loading...</div>} >
          {isLoggedIn && <CardItems onShowCart={showCartItemHandler} />}
          </React.Suspense>
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/store/:productId">
          {isLoggedIn && <ProductDetails />}
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
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
