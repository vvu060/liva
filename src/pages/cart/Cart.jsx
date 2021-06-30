import React, { useEffect } from "react";
import CartItems from "./cart_items/CartItems";
import PriceSummary from "./price_summary/PriceSummary";
import style from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={`container ${style.cart}`}>
      <CartItems />
      <PriceSummary />
    </div>
  );
};

export default Cart;
