import React, { Fragment } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
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
            <Nav>
              <Nav.Item className="p-2 mx-2" style={{ fontSize: "1.6rem" }}>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="p-2 mx-2" style={{ fontSize: "1.6rem" }}>
                <Nav.Link href="#store">Store</Nav.Link>
              </Nav.Item>
              <Nav.Item className="p-2 mx-2" style={{ fontSize: "1.6rem" }}>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button className="px-4 p-3">Cart0</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
