import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";
import { Remove, Add, Star } from "@material-ui/icons";

import { updateItem, removeItem } from "../../../../helpers/updateCart";

import { selectLoading } from "../../../../redux/features/loading/loadingSlice";

import Button from "../../../../components/button/Button";

import style from "./CartItem.module.scss";

const MAX_RATING = 5;
const MIN_RATING = 2;

const CartItem = ({
  name,
  price,
  totalPrice,
  image,
  lineItemId,
  qty,
  productId,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(selectLoading);
  const cartId = localStorage.getItem("cart_id");
  const [quantity, setQuantity] = useState(qty);
  const [debouncedQuantity, setDebouncedQuantity] = useState(quantity);
  const [amount, setAmount] = useState(totalPrice);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  /**
   * Function to debounce quantity change.
   * @function useEffect
   * @param {}
   * @returns {}
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuantity(quantity);
    }, 700);

    return () => {
      clearTimeout(timerId);
    };
  }, [quantity]);

  useEffect(() => {
    if (debouncedQuantity) {
      updateItem(debouncedQuantity, cartId, lineItemId, dispatch);
      setAmount(+debouncedQuantity * +price);
    }
  }, [debouncedQuantity, lineItemId]);

  const increaseQuantity = () => {
    setQuantity((quantity) => (quantity += 1));
    setAmount((+quantity + 1) * +price);
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => (quantity -= 1));
    setAmount((+quantity - 1) * +price);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const removeFromCart = () => {
    removeItem(cartId, lineItemId, dispatch);
  };

  const getProductId = () => {
    history.push(`/products/${name}/${productId}`);
  };

  return (
    <div data-test="component-cartItem" className={`block ${style.cartItem}`}>
      <img
        className={style.cartItem__img}
        src={image}
        loading="lazy"
        alt={name}
        onClick={getProductId}
      />

      <div className={style.cartItem__right}>
        <div className={style.cartItem__details}>
          <h3
            data-test="product-name"
            className={style.cartItem__name}
            onClick={getProductId}
          >
            {name}
          </h3>

          <div className={style.cartItem__rating}>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Star key={i} className={style.cartItem__iconStar} />
              ))}
          </div>

          <p className={style.cartItem__size}>
            Per Piece: ₹<span data-test="product-price">{price}</span>
          </p>

          <p className={style.cartItem__size}>
            Estimated Delivery by 31 Jul 2021
          </p>
          <div className={style.cartItem__qty}>
            <p>Quantity :</p>
            {isLoading ? (
              <div className={style.cartItem__loader}>
                <ClipLoader color="green" size={30} />
              </div>
            ) : (
              <div className={style.cartItem__qtyInput}>
                <Remove
                  className={style.cartItem__icon}
                  onClick={decreaseQuantity}
                />
                <input
                  data-test="product-quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => updateQuantity(e)}
                />
                <Add
                  className={style.cartItem__icon}
                  onClick={increaseQuantity}
                />
              </div>
            )}
          </div>
          <h4 className={style.cartItem__amount}>
            Total Amount: ₹<span data-test="product-totalPrice">{amount}</span>{" "}
          </h4>
        </div>

        <div data-test="remove-button">
          <Button
            name="Remove"
            classes="btn btn-primary"
            disabled={isLoading}
            onClick={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  lineItemId: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
};

CartItem.defaultProps = {
  name: "Carrot Seeds",
  image:
    "https://cdn.chec.io/merchants/28500/assets/oMT4MY6wdR6TCIpX|Red-Gajar.jpg",
  price: 88,
  totalPrice: 88,
  lineItemId: "item_7RyWOwmK5nEa2V",
  qty: 1,
  productId: "prod_bO6J5apRyXoEjp",
};

export default CartItem;
