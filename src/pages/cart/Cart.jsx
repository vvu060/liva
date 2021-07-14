import React from "react";
import CartItems from "./cart_items/CartItems";
import PriceSummary from "./price_summary/PriceSummary";
import style from "./Cart.module.scss";
import Address from "../../components/address_form/Address";
import FallbackCart from "../../components/errors/empty_cart/FallbackCart";
import { ErrorBoundary } from "react-error-boundary";
import { selectCartItems } from "../../redux/features/cart/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  if (cartItems?.length === 0) {
    return (
      <div className="block container">
        <FallbackCart />
      </div>
    );
  }

  return (
    <div className={`container ${style.cart}`}>
      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
        <ErrorBoundary FallbackComponent={FallbackCart}>
          <CartItems />
        </ErrorBoundary>
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
