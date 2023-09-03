import React, { useContext, useRef, useState } from "react";
import classes from "./Login.module.css";
import AuthContext from "../../store/Auth-context";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCooNjCeiqrD-SUyUCID7M32eTRmyzFaV8";
    } else{
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCooNjCeiqrD-SUyUCID7M32eTRmyzFaV8";
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        if(res.ok){
            return res.json();
        } else{
            return res.json().then((data) => {
                let errMsg = "Authentication Failed";
                throw new Error(errMsg);
            })
        }
    }).then((data) => {
        console.log(data);
        authCtx.login(data.idToken);
        history.replace('/store')
    }).catch((err) => {
        alert(err.message);
    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="email">Your Email</label>
      <input type="email" id="email" required ref={emailInputRef} />
      <label htmlFor="password">Your Password</label>
      <input type="password" id="password" required ref={passwordInputRef} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
