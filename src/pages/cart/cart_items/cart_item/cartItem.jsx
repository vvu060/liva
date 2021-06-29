import React, { useState, useEffect, useCallback } from "react";
import Button from "../../../../components/button/Button";
import { Remove, Add } from "@material-ui/icons";
import axios from "axios";
import style from "./CartItem.module.scss";
import { endpoints, headers } from "../../../../endpoints";

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
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [quantity]);

  useEffect(() => {
    if (debouncedQuantity) {
      updateItem(debouncedQuantity);
    }
  }, [debouncedQuantity]);

  console.log(debouncedQuantity);

  const increaseQuantity = (e) => {
    setQuantity((quantity) => (quantity += 1));
  };

  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((quantity) => (quantity -= 1));
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updateItem = (qty) => {
    fetch(`${endpoints.cart}/${cartId}/items/${lineItemId}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ quantity: qty }),
    })
      .then((response) => response.json())
      .then((data) => setAmount(data.line_total.formatted_with_symbol))
      .then((error) => console.log(error));
  };

  const removeItem = () => {
    fetch(`${endpoints.cart}/${cartId}/items/${lineItemId}`, {
      method: "DELETE",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((error) => console.log(error));
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
            <Add
              className={style.cartItem__icon}
              onClick={(e) => increaseQuantity(e)}
            />
          </div>
        </div>
        <h4 className={style.cartItem__amount}>Total Amount: {amount}</h4>
      </div>
      <div className={style.cartItem__button}>
        <Button
          name="Remove"
          classes="btn btn-primary"
          disabled={false}
          onClick={removeItem}
        />
      </div>
    </div>
  );
};

export default CartItem;
