import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../store/Auth-context";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css"

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCooNjCeiqrD-SUyUCID7M32eTRmyzFaV8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCooNjCeiqrD-SUyUCID7M32eTRmyzFaV8";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const data = await response.json();
        let errMsg = "Authentication Failed";
        throw new Error(errMsg);
      }
      const data = await response.json();
      // console.log(data);
      authCtx.login(data.idToken, data.email);

      history.replace("/store");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" required ref={emailInputRef} />
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password" required ref={passwordInputRef} />
        <button type="submit" className={classes.submitbtn}>{isLogin ? "Login" : "Create Account"}</button>
        <button
          type="button"
          className={classes.btn}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </>
  );
};

export default Login;
