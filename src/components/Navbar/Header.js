import React, { Fragment, useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import Logout from "./Logout";
import AuthContext from "../../store/Auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      <Navbar className={classes.navmain} bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "1.6rem", fontWeight: "bolder" }}
          >
            Ecommerce Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className={classes.navbar}>
              <Nav.Item
                className="p-2 m-4 mx-2"
                style={{
                  fontSize: "1.3rem",
                  width: "8rem",
                  fontWeight: "bold",
                }}
              >
                <NavLink to="/home" activeClassName={classes.active}>
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item
                className="p-2 m-4 mx-2"
                style={{
                  fontSize: "1.3rem",
                  width: "8rem",
                  fontWeight: "bold",
                }}
              >
                <NavLink to="/store" activeClassName={classes.active}>
                  Store
                </NavLink>
              </Nav.Item>
              <Nav.Item
                className="p-2 m-4 mx-2"
                style={{
                  fontSize: "1.3rem",
                  width: "8rem",
                  fontWeight: "bold",
                }}
              >
                <NavLink to="/about" activeClassName={classes.active}>
                  About
                </NavLink>
              </Nav.Item>
              {!isLoggedIn && (
                <Nav.Item
                  className="p-2 m-4 mx-2"
                  style={{
                    fontSize: "1.3rem",
                    width: "8rem",
                    fontWeight: "bold",
                  }}
                >
                  <NavLink to="/login" activeClassName={classes.active}>
                    Login
                  </NavLink>
                </Nav.Item>
              )}
              {isLoggedIn && (
                <Nav.Item
                  className="p-2 m-4 mx-2"
                  style={{
                    fontSize: "1.3rem",
                    width: "8rem",
                    fontWeight: "bold",
                  }}
                >
                  {/* <NavLink
                  to="/login"
                  activeClassName={classes.active}
                >
                  Logout
                </NavLink> */}
                  <Logout />
                </Nav.Item>
              )}
              <Nav.Item
                className="p-2 m-4 mx-2"
                style={{
                  fontSize: "1.3rem",
                  width: "8rem",
                  fontWeight: "bold",
                }}
              >
                <NavLink to="/contactUs" activeClassName={classes.active}>
                  Contact Us
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <CartButton onClick={props.onShowCart} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
