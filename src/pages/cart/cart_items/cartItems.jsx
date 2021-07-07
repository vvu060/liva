import React, { useState, useEffect, Fragment } from "react";
import CartItem from "./cart_item/CartItem";
import { endpoints, headersPublic } from "../../../endpoints";
import style from "./CartItems.module.scss";
import Button from "../../../components/button/Button";
import CartItemShimmer from "../../../components/loading/cart_item/CartItemShimmer";
import {
  cartItems,
  selectCartItems,
} from "../../../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../../redux/features/loading/loadingSlice";

const CartItems = () => {
  const cartId = localStorage.getItem("cart_id");
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const loading = useSelector(selectLoading);
  const [items, setItems] = useState(cart);
  const [isLoading, setIsLoading] = useState(loading);

  const getCart = () => {
    setIsLoading(true);
    fetch(`${endpoints.cart}/${cartId}`, {
      method: "GET",
      headers: headersPublic,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.line_items);
        setItems(data.line_items);
        dispatch(cartItems(data.line_items));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  // console.log({ items, cart });
  console.log("CartItems", { isLoading });

  return (
    <div className={`block ${style.cartItems}`}>
      <h2>My Cart ({items && items.length})</h2>
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
                // packetSize={cartItem.variant_groups[0].name}
                // size={cartItem.variant_groups[0].options[0].name}
                lineItemId={cartItem.id}
                qty={cartItem.quantity}
                productId={cartItem.product_id}
              />
            ))}
        </Fragment>
      )}
      <Button name="Empty Cart" classes="btn btn-primary" />
    </div>
  );
};

export default CartItems;
