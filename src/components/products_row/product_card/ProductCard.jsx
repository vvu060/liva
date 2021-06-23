import React from "react";
import PropTypes from "prop-types";
import style from "./ProductCard.module.scss";
import Button from "../../button/Button";

const ProductCard = ({ image, name, price }) => {
  return (
    <div
      data-test="component-product-card"
      className={`col-3 ${style.productCard}`}
    >
      <img src={image} alt={name} className={style.productCard__image} />
      <h5>{name}</h5>
      <p>{price}</p>
      <Button name="Add to Cart" />
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
