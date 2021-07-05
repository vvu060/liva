import React, { useState, useEffect, Fragment } from "react";
import CartItem from "./cart_item/CartItem";
import { endpoints, headersPublic } from "../../../endpoints";
import style from "./CartItems.module.scss";
import CartItemShimmer from "../../../components/loading/cart_item/CartItemShimmer";
import { cartItems } from "../../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItems = () => {
  const cartId = localStorage.getItem("cart_id");
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    </div>
  );
};

export default CartItems;
