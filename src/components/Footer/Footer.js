import React, { Fragment } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Facebook from "../img/Facebook.png";
import Spotify from "../img/Spotify.png";
import youtube from "../img/youtube.jpg";

const Footer = () => {
  return (
    <Fragment>
      <Navbar style={{ backgroundColor: "purple" }} variant="dark">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "2.9rem", fontWeight: "bold" }}
          >
            The Generics
          </Navbar.Brand>
          <Nav>
            <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
              <Nav.Link href="#home"><img src={youtube} alt="YouTube" width="40" height="40" className="rounded"  /></Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
              <Nav.Link href="#store"><img src={Spotify} alt="YouTube" width="40" height="40" className="rounded"  /></Nav.Link>
            </Nav.Item>
            <Nav.Item className="p-2 mx-5" style={{ fontSize: "1.6rem" }}>
              <Nav.Link href="#about"><img src={Facebook} alt="YouTube" width="40" height="40" className="rounded"  /></Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Footer;
