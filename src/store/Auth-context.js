import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  userEmail: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const initialUserEmail = localStorage.getItem("UserEmail");
  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, userEmail) => {
    setToken(token);
    localStorage.setItem("token", token);
    
    setUserEmail(userEmail)
    localStorage.setItem("UserEmail", userEmail);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");

    setUserEmail("")
    localStorage.removeItem("UserEmail");
  };


  const contextValue = {
    token: token,
    userEmail: userEmail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
