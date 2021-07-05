import React from "react";
import CartItems from "./cart_items/CartItems";
import PriceSummary from "./price_summary/PriceSummary";
import style from "./Cart.module.scss";
import Address from "../../components/address_form/Address";

const Cart = () => {
  return (
    <div className={`container ${style.cart}`}>
      <CartItems />
      <div className={style.cart__info}>
        <PriceSummary />
        <Address />
      </div>
    </div>
  );
};

export default Cart;
