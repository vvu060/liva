import React from "react";
import moment from "moment";
import style from "./Order.module.scss";
import { Link } from "react-router-dom";

const Order = ({ order }) => {
  console.log(order);

  return (
    <div className={style.order}>
      <div className={style.order__details}>
        <div className={style.order__detail}>
          <p>Order Placed</p>
          <p>{moment.unix(order.created).format("DD MMM YYYY")}</p>
        </div>

        <div className={style.order__detail}>
          <p>Total</p>
          <p>{order.order_value.formatted_with_symbol}</p>
        </div>

        <div className={style.order__id}>
          <p>Order ID: {order.id}</p>
          <p>{order.order.line_items.length} Items</p>
        </div>
      </div>

      <div className={style.order__info}>
        <div className={style.order__cart}>
          {order.order.line_items.map((item) => (
            <Link to={`/products/${item.product_name}`}>
              <div className={style.order__items}>
                <p>{item.product_name}</p>
                <p>{item.price.formatted_with_symbol}</p>
                <p>{item.quantity}</p>
                <p>{item.line_total.formatted_with_symbol}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className={style.order__address}>
          <h5>Shipping Address</h5>
          <p>Main Street, NewYork, NY City.</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
