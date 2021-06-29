import React, { useState, useEffect } from "react";
import CartItem from "./cart_item/CartItem";
import { endpoints, headers } from "../../../endpoints";
import style from "./CartItems.module.scss";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/features/cart/cartSlice";

const CartItems = () => {
  const cartId = localStorage.getItem("cart_id");

  const [cartItems, setCartItems] = useState([]);

  const getCart = () => {
    fetch(`${endpoints.cart}/${cartId}`, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((data) => setCartItems(data.line_items))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCart();
  }, []);

  // console.log(cartItems);

  return (
    <div className={`block ${style.cartItems}`}>
      <h2>My Cart ({cartItems.length})</h2>
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
    </div>
  );
};

export default CartItems;
