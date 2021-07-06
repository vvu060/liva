import React from "react";
import style from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { addToCart } from "../../../helpers/addToCart";
import { useDispatch } from "react-redux";

const LatestProduct = ({ name, image, price, productId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    addToCart(productId, dispatch);
  };

  return (
    <div
      data-test="component-latest-product"
      className={`col-4 ${style.latestProduct}`}
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
        <p>
          {" "}
          <s>₹150.00</s>&nbsp;&nbsp;
          <span data-test="product-price">{price}</span>
        </p>
      </div>
      <div className={style.latestProduct__icon} onClick={addItemToCart}>
        <ShoppingCartOutlinedIcon />
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
