import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import CardItems from "./components/Card/CardItems";

function App() {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ecommerce Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#store">Store</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button >Cart0</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CardItems />
    </>
  );
}

export default App;
