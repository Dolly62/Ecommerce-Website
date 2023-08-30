import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import albumone from "../img/albumone.png";
import albumtwo from "../img/albumtwo.png";
import albumthree from "../img/albumthree.png";
import albumfour from "../img/albumfour.png";
import classes from "./ProductDetails.module.css";
import CartContext from "../../store/cart-context";

const productsArr = [
  {
    id: 102,
    title: "Colors",
    price: 100,
    imageUrl: albumone,
    Review: "Amazing",
    Rating: "5★",
  },
  {
    id: 231,
    title: "Black and white Colors",
    price: 50,
    imageUrl: albumtwo,
    Review: "Nice Product",
    Rating: "4★",
  },
  {
    id: 378,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: albumthree,
    Review: "Nice",
    Rating: "3★",
  },
  {
    id: 434,
    title: "Blue Color",
    price: 100,
    imageUrl: albumfour,
    Review: "Nice Color",
    Rating: "3.5★",
  },
];

const ProductDetails = (props) => {
  const cartCtx = useContext(CartContext);
  const { productId } = useParams();
  // console.log(productId);

  const addItemsTocart = (product) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  const productDetail = productsArr.find(
    (productDetail) => productDetail.id === +productId
  );

  if (!productDetail) {
    return <p>Product not found!</p>;
  }
  return (
    <>
      <Row className={classes.mainrow}>
        <Col>
          <img src={productDetail.imageUrl} alt={productDetail.title} />
          <div>
            <button onClick={() => addItemsTocart(productDetail)}>
              Add to Cart
            </button>
          </div>
        </Col>
        <Col>
          <Row className={classes.row}>
            <h1>{productDetail.title}</h1>
            <h2 className={classes.price}>Rs.{productDetail.price}</h2>
          </Row>
          <Row className={classes.row}>
            <h2 className={classes.review}>Reviews & Ratings</h2>
            <li>
              <span>{productDetail.Rating}</span> {productDetail.Review}
            </li>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
