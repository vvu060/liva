import React, { useState, useEffect, Fragment } from "react";
import CartItem from "./cart_item/CartItem";
import { endpoints, headers } from "../../../endpoints";
import style from "./CartItems.module.scss";
import CartItemShimmer from "../../../components/loading/cart_item/CartItemShimmer";

const CartItems = () => {
  const cartId = localStorage.getItem("cart_id");
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCart = () => {
    setIsLoading(true);
    fetch(`${endpoints.cart}/${cartId}`, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data.line_items);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCart();
  }, []);

  // console.log(cartItems);

  return (
    <div className={`block ${style.cartItems}`}>
      <h2>My Cart ({cartItems.length})</h2>
      {isLoading ? (
        <Fragment>
          <CartItemShimmer colSpace={6} />
          <CartItemShimmer colSpace={6} />
          <CartItemShimmer colSpace={6} />
          <CartItemShimmer colSpace={6} />
        </Fragment>
      ) : (
        <Fragment>
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              name={cartItem.name}
              price={cartItem.price.formatted_with_symbol}
              totalPrice={cartItem.line_total.formatted_with_symbol}
              image={cartItem.media.source}
              // packetSize={cartItem.variant_groups[0].name}
              // size={cartItem.variant_groups[0].options[0].name}
              lineItemId={cartItem.id}
              qty={cartItem.quantity}
            />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default CartItems;
