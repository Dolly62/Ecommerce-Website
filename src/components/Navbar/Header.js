import React, { Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "1.6rem" }}>
            Ecommerce Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className={classes.navbar}>
              <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
                <NavLink
                  to="/home"
                  activeClassName={classes.active}
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
                <NavLink
                  to="/store"
                  activeClassName={classes.active}
                >
                  Store
                </NavLink>
              </Nav.Item>
              <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
                <NavLink
                  to="/about"
                  activeClassName={classes.active}
                >
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
                <NavLink
                  to="/contactUs"
                  activeClassName={classes.active}
                >
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
