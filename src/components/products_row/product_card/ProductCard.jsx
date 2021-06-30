import React from "react";
import PropTypes from "prop-types";
import style from "./ProductCard.module.scss";
import Button from "../../button/Button";
import { addToCart } from "../../../helpers/addToCart";
import { useDispatch } from "react-redux";

const ProductCard = ({ productId, image, name, price, colSpace }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    addToCart(productId, dispatch);
  };

  return (
    <div
      data-test="component-product-card"
      className={`col-${colSpace} ${style.productCard}`}
    >
      <img
        data-test="product-image"
        src={image}
        loading="lazy"
        alt={name}
        className={style.productCard__image}
      />
      <h5 data-test="product-name">{name}</h5>
      <p data-test="product-price">{price}</p>
      <Button
        classes="btn btn-primary btn-border"
        name="Add to Cart"
        parameters={productId}
        onClick={addItemToCart}
      />
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
