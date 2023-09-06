import React, { useContext, useEffect } from "react";
import AuthContext from "../../store/Auth-context";
import { useHistory } from "react-router-dom";
import classes from "./Logout.module.css"

const Logout = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();

    history.replace("/login");
  }

  // useEffect(() => {
  //   if(isLoggedIn){
  //       setTimeout(() => {
  //           logoutHandler();
  //       }, 300000)
  //   }

  // }, [isLoggedIn, history])


  return <button className={classes.logoutBtn} onClick={logoutHandler}>Logout</button>;
};

export default Logout;
