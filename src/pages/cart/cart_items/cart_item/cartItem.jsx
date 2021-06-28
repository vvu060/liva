import React from "react";
import Button from "../../../../components/button/Button";
import { Remove, Add } from "@material-ui/icons";
import style from "./CartItem.module.scss";

const CartItem = ({ name, price, image, id, packetSize, size }) => {
  console.log({ name, price, image, id });
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
          {packetSize}: <span>{size}</span>
        </p>

        <p className={style.cartItem__size}>
          Estimated Delivery by 31 Jul 2021
        </p>
        <div className={style.cartItem__qty}>
          <p>Quantity :</p>
          <div className={style.cartItem__qtyInput}>
            <Remove className={style.cartItem__icon} />
            <input type="number" name="" id="" min="1" value="1" />
            <Add className={style.cartItem__icon} />
          </div>
        </div>
        <h4 className={style.cartItem__amount}>Total Amount: ₹1500</h4>
      </div>
      <div className={style.cartItem__button}>
        <Button name="Remove" classes="btn btn-primary" disabled={false} />
      </div>
    </div>
  );
};

export default CartItem;
