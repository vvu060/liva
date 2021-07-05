import React from "react";
import PropTypes from "prop-types";
import style from "./ProductCard.module.scss";
import Button from "../../button/Button";
import { addToCart } from "../../../helpers/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../../redux/features/loading/loadingSlice";
import BeatLoader from "react-spinners/BeatLoader";
import { useHistory } from "react-router-dom";

const ProductCard = ({ productId, image, name, price, colSpace }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(selectLoading);
  const addItemToCart = () => {
    addToCart(productId, dispatch);
  };

  const getProductId = () => {
    history.push(`/products/${name}/${productId}`);
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
        onClick={getProductId}
      />
      <h5 data-test="product-name" onClick={getProductId}>
        {name}
      </h5>
      <p data-test="product-price">{price}</p>
      {isLoading ? (
        <div className={style.productCard__loader}>
          <BeatLoader color="white" size={10} />
        </div>
      ) : (
        <Button
          classes="btn btn-primary btn-border"
          name="Add to Cart"
          parameters={productId}
          onClick={addItemToCart}
        />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
