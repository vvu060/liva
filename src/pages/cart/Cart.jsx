import React from "react";
import CartItems from "./cart_items/CartItems";
import PriceSummary from "./price_summary/PriceSummary";

const Cart = () => {
  return (
    <div>
      <CartItems />
      <PriceSummary />
    </div>
  );
};

export default Cart;
