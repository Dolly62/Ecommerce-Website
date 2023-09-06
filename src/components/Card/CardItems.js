import React, { Fragment, useContext, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import albumone from "../img/albumone.png";
import albumtwo from "../img/albumtwo.png";
import albumthree from "../img/albumthree.png";
import albumfour from "../img/albumfour.png";
import CartBtn from "./CartBtn";
import AddCartBtn from "./AddCartBtn";
import CartContext from "./../../store/cart-context";
import { Link } from "react-router-dom";
import AuthContext from "../../store/Auth-context";

const CardItems = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);


    // async function fetchCartItems() {
    //   const userEmail = authCtx.userEmail.replace(/[@.]/g, "");
    //   console.log(userEmail);
    //   try {
    //     const response = await fetch(
    //       `https://crudcrud.com/api/f0302318e2b346fc95f76a5127e71fe6/cart${userEmail}`
    //     );
    //     if (!response.ok) {
    //       throw new Error("Failed to get");
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //     cartCtx.addItem(data.items);
    //   } catch (error) {
    //     alert(error.message);
    //   }
    // }

    // useEffect(() => {
    //   if(props.onShowCart){
    //     fetchCartItems()
    //   }
    // }, [props.onShowCart])
  

  const productsArr = [
    {
      id: 102,
      title: "Colors",
      price: 100,
      imageUrl: albumone,
    },
    {
      id: 231,
      title: "Black and white Colors",
      price: 50,
      imageUrl: albumtwo,
    },
    {
      id: 378,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: albumthree,
    },
    {
      id: 434,
      title: "Blue Color",
      price: 100,
      imageUrl: albumfour,
    },
  ];

  const addItemsHandler = async (product) => {
    // console.log("clicked");
    // console.log({
    //   id: product.id,
    //   title: product.title,
    //   quantity: quantity,
    //   price: product.price,
    //   imageUrl: product.imageUrl
    // }
    // );

    const userEmail = authCtx.userEmail.replace(/[@.]/g, "");
    // console.log(userEmail);
    try {
      const response = await fetch(
        `https://crudcrud.com/api/8099f018d7d04edcb08f63350a594aca/cart${userEmail}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: product.id,
            title: product.title,
            quantity: 1,
            price: product.price,
            imageUrl: product.imageUrl,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        // console.log(data);
        throw new Error("Failed");
      }
      const data = await response.json();
      // console.log(data);

      cartCtx.addItem({
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
        imageUrl: product.imageUrl,
      });
    } catch (error) {
      alert(error.mesaage);
    }
  };

  return (
    <Fragment>
      <Container className="text-center" style={{ width: "50rem" }}>
        <Row className="m-5">
          <Col>
            <h3>Music</h3>
          </Col>
        </Row>
        <Row className="m-5">
          {productsArr.map((product) => (
            <Col lg={6} md={6} xs={12} key={product.id} className="mb-4">
              <Card style={{ width: "18rem" }}>
                <Link to={`/store/${product.id}`}>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Text>${product.price}</Card.Text>
                    <AddCartBtn onadditem={() => addItemsHandler(product)} />
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        <CartBtn onClick={props.onShowCart} />
      </Container>
    </Fragment>
  );
};

export default CardItems;
