import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShoppingCartOutlined, Star } from "@material-ui/icons";

import { addToCart } from "../../../helpers/addToCart";

import style from "./LatestProduct.module.scss";

const MAX_RATING = 5;
const MIN_RATING = 2;

const LatestProduct = ({ name, image, price, productId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  /**
   * Function to add items to the cart.
   * @function addItemToCart
   * @param {}
   * @returns {}
   */
  const addItemToCart = () => {
    addToCart(productId, dispatch);
  };

  return (
    <div
      data-test="component-latest-product"
      className={`col-xs-6 col-sm-4 col-md-4 col-lg-4 ${style.latestProduct}`}
    >
      <img
        data-test="product-image"
        onClick={() => history.push(`/products/${name}/${productId}`)}
        src={image}
        loading="lazy"
        alt={name}
      />
      <div className={style.latestProduct__details}>
        <h5
          data-test="product-name"
          onClick={() => history.push(`/products/${name}/${productId}`)}
        >
          {name}
        </h5>
        <div data-test="product-rating" className={style.latestProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star key={i} className={style.latestProduct__iconStar} />
            ))}
        </div>
        <p>
          {" "}
          <s>₹150.00</s>&nbsp;&nbsp;
          <span data-test="product-price">{price}</span>
        </p>
      </div>
      <div className={style.latestProduct__icon} onClick={addItemToCart}>
        <ShoppingCartOutlined />
      </div>
    </div>
  );
};

LatestProduct.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default LatestProduct;
