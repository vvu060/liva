import React, { useState, useEffect } from "react";
import Button from "../../../../components/button/Button";
import { Remove, Add } from "@material-ui/icons";
import style from "./CartItem.module.scss";
import { updateItem, removeItem } from "../../../../helpers/updateCart";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../../../redux/features/loading/loadingSlice";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const CartItem = ({
  name,
  price,
  totalPrice,
  image,
  lineItemId,
  packetSize,
  size,
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
  }, [debouncedQuantity]);

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
    removeItem(cartId, lineItemId);
  };

  const getProductId = () => {
    history.push(`/products/${name}/${productId}`);
  };

  return (
    <div className={`block ${style.cartItem}`}>
      <img
        className={style.cartItem__img}
        src={image}
        loading="lazy"
        alt={name}
        onClick={getProductId}
      />
      <div className={style.cartItem__details}>
        <h3 className={style.cartItem__name} onClick={getProductId}>
          {name}
        </h3>

        <p className={style.cartItem__size}>
          Per Piece: ₹<span>{price}</span>
        </p>

        <p className={style.cartItem__size}>
          {/* {packetSize}: <span>{size}</span> */}
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
        <h4 className={style.cartItem__amount}>Total Amount: ₹{amount}</h4>
      </div>
      <div>
        <Button
          name="Remove"
          classes="btn btn-primary"
          disabled={isLoading}
          onClick={removeFromCart}
        />
      </div>
    </div>
  );
};

export default CartItem;
