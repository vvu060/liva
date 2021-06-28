import React, { useState, useEffect } from "react";
import CartItem from "./cart_item/CartItem";
import { endpoints, headers } from "../../../endpoints";
import style from "./CartItems.module.scss";

const CartItems = () => {
  const [cartItems, setCartItems] = useState([]);

  const getCart = () => {
    fetch(`${endpoints.products}`, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((data) => setCartItems(data.data.slice(0, 5)))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCart();
  }, []);

  console.log(cartItems);

  return (
    <div className="block">
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price.formatted_with_symbol}
          image={cartItem.assets[0].url}
          packetSize={cartItem.variant_groups[0].name}
          size={cartItem.variant_groups[0].options[0].name}
          id={cartItem.id}
        />
      ))}
    </div>
  );
};

export default CartItems;
