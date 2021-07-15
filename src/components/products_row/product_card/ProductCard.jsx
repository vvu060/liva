import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";
import { Star, FavoriteBorder, Favorite } from "@material-ui/icons";
import { addToCart } from "../../../helpers/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../../redux/features/loading/loadingSlice";
import Button from "../../button/Button";
import style from "./ProductCard.module.scss";

const MAX_RATING = 5;
const MIN_RATING = 2;

const ProductCard = ({ productId, image, name, price, colSpace }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(selectLoading);
  const [liked, setLiked] = useState(false);
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

  /**
   * Function to push user to correct product detail page.
   * @function addItemToCart
   * @param {}
   * @returns {}
   */
  const getProductId = () => {
    history.push(`/products/${name}/${productId}`);
  };

  return (
    <div
      data-test="component-product-card"
      className={`col-xs-12 col-sm-4 col-md-3 col-lg-3 ${style.productCard}`}
    >
      <img
        data-test="product-image"
        src={image}
        loading="lazy"
        alt={name}
        className={style.productCard__image}
        onClick={getProductId}
      />
      {liked ? (
        <div className={style.productCard__fav}>
          <Favorite
            className={style.productCard__favIcon}
            onClick={() => setLiked(false)}
          />
        </div>
      ) : (
        <div className={style.productCard__fav}>
          <FavoriteBorder
            className={style.productCard__favIcon}
            onClick={() => setLiked(true)}
          />
        </div>
      )}
      <h5 data-test="product-name" onClick={getProductId}>
        {name}
      </h5>
      <div data-test="product-rating" className={style.productCard__rating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <Star key={i} className={style.productCard__icon} />
          ))}
      </div>
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
