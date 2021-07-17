import React from "react";

import CartItems from "./cart_items/CartItems";
import PriceSummary from "./price_summary/PriceSummary";
import Address from "../../components/address_form/Address";

import style from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={`container ${style.cart}`}>
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
        <CartItems />
      </div>
      <div
        className={`col-xs-12 col-sm-12 col-md-4 col-lg-3 ${style.cart__info}`}
      >
        <PriceSummary />
        <Address />
      </div>
    </div>
  );
};

export default Cart;
