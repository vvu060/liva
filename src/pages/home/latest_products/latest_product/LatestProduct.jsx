import React from "react";
import style from "./LatestProduct.module.scss";
import PropTypes from "prop-types";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const LatestProduct = ({ name, image, price }) => {
  return (
    <div
      data-test="component-latest-product"
      className={`col-4 ${style.latestProduct}`}
    >
      <img src={image} loading="lazy" alt={name} />
      <div className={style.latestProduct__details}>
        <h5 data-test="product-name">{name}</h5>
        <p>
          {" "}
          <s>₹150.00</s>&nbsp;&nbsp;<span>{price}</span>
        </p>
      </div>
      <div className={style.latestProduct__icon}>
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

LatestProduct.defaultProps = {
  alt: "Company Logo",
  width: 50,
  height: "auto",
};

export default LatestProduct;
