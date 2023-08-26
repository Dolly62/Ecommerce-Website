import React from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Home.module.css";
import HomeBtn from "./HomeBtn";

const Home = () => {
  const details = [
    {
      date: "JULY16",
      name: "DETROIT, MI",
      address: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JULY19",
      name: "TORONTO, ON",
      address: "BUDWEISER STAGE",
    },
    {
      date: "JULY 22",
      name: "BRISTOW, VA",
      address: "JIGGY LUBE LIVE",
    },
    {
      date: "JULY 29",
      name: "PHOENIX, AZ",
      address: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      name: "LAS VEGAS, NV",
      address: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      name: "CONCORD, CA",
      address: "CONCORD PAVILION",
    }
  ];
  return (
    <Fragment>
      <HomeBtn />
      <Container className={classes.container}>
        <Row className={classes.mainRow}>
          <h2>Tours</h2>
          {details.map((detail) => (
            <Row className={classes.row}>
              <Col>{detail.date}</Col>
              <Col>{detail.name}</Col>
              <Col>{detail.address}</Col>
              <Col>
                <button className={classes.btn}>BUY TICKETS</button>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
