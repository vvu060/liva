import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { endpoints, headersPublic } from "../../../endpoints";
import {
  cartItems,
  selectCartItems,
} from "../../../redux/features/cart/cartSlice";
import { selectLoading } from "../../../redux/features/loading/loadingSlice";

import CartItem from "./cart_item/CartItem";
import FallbackCart from "../../../components/errors/empty_cart/FallbackCart";
import CartItemShimmer from "../../../components/loading/cart_item/CartItemShimmer";

import style from "./CartItems.module.scss";

const CartItems = () => {
  const cartId = localStorage.getItem("cart_id");
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const loading = useSelector(selectLoading);
  const [items, setItems] = useState(cart);
  const [isLoading, setIsLoading] = useState(loading);

  /**
   * Function to get cart items.
   * @function getCart
   * @param {}
   * @returns {} all cart items.
   */
  const getCart = () => {
    setIsLoading(true);
    fetch(`${endpoints.cart}/${cartId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.line_items);
        dispatch(cartItems(data.line_items));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const ac = new AbortController();
    getCart();
    console.log("coming");
    return () => ac.abort();
  }, []);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  if (items?.length === 0 || !cartId) {
    return (
      <div className="block container">
        <FallbackCart />
      </div>
    );
  }

  return (
    <div data-test="component-cartItems" className={`block ${style.cartItems}`}>
      <h2 data-test="component-items">My Cart ({items && items.length})</h2>
      {isLoading ? (
        <Fragment>
          <CartItemShimmer colSpace={10} />
          <CartItemShimmer colSpace={10} />
          <CartItemShimmer colSpace={10} />
        </Fragment>
      ) : (
        <Fragment>
          {items &&
            items.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                name={cartItem.name}
                price={cartItem.price.raw}
                totalPrice={cartItem.line_total.raw}
                image={cartItem.media.source}
                lineItemId={cartItem.id}
                qty={cartItem.quantity}
                productId={cartItem.product_id}
              />
            ))}
        </Fragment>
      )}
    </div>
  );
};

export default CartItems;
