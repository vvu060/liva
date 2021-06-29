import React, { useState, useEffect, useCallback } from "react";
import Button from "../../../../components/button/Button";
import { Remove, Add } from "@material-ui/icons";
import style from "./CartItem.module.scss";
import { updateItem, removeItem } from "../../../../helpers/updateCart";

const CartItem = ({
  name,
  price,
  totalPrice,
  image,
  lineItemId,
  packetSize,
  size,
  qty,
}) => {
  const cartId = localStorage.getItem("cart_id");
  const [quantity, setQuantity] = useState(qty);
  const [debouncedQuantity, setDebouncedQuantity] = useState(quantity);
  const [amount, setAmount] = useState(totalPrice);

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
      updateItem(debouncedQuantity, cartId, lineItemId);
    }
  }, [debouncedQuantity]);

  const increaseQuantity = () => {
    setQuantity((quantity) => (quantity += 1));
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => (quantity -= 1));
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const removeFromCart = () => {
    removeItem(cartId, lineItemId);
  };

  return (
    <div className={`block ${style.cartItem}`}>
      <img
        className={style.cartItem__img}
        src={image}
        loading="lazy"
        alt={name}
      />
      <div className={style.cartItem__details}>
        <h3 className={style.cartItem__name}>{name}</h3>

        <p className={style.cartItem__size}>
          Per Piece: <span>{price}</span>
        </p>

        <p className={style.cartItem__size}>
          {/* {packetSize}: <span>{size}</span> */}
        </p>

        <p className={style.cartItem__size}>
          Estimated Delivery by 31 Jul 2021
        </p>
        <div className={style.cartItem__qty}>
          <p>Quantity :</p>
          <div className={style.cartItem__qtyInput}>
            <Remove
              className={style.cartItem__icon}
              onClick={decreaseQuantity}
            />
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => updateQuantity(e)}
            />
            <Add className={style.cartItem__icon} onClick={increaseQuantity} />
          </div>
        </div>
        <h4 className={style.cartItem__amount}>Total Amount: {amount}</h4>
      </div>
      <div className={style.cartItem__button}>
        <Button
          name="Remove"
          classes="btn btn-primary"
          disabled={false}
          onClick={removeFromCart}
        />
      </div>
    </div>
  );
};

export default CartItem;
