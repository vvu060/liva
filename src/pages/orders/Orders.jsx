import React, { Fragment } from "react";

import { endpoints, headersSecret } from "../../endpoints";
import useFetch from "../../hooks/useFetch";

import Order from "./order/Order";
import OrderShimmer from "../../components/loading/orders/OrderShimmer";

import style from "./Orders.module.scss";

const Orders = () => {
  const userId = localStorage.getItem("chec_user_id");
  const {
    response: orders,
    isError,
    isLoading,
  } = useFetch(`${endpoints.customers}/${userId}/orders`, {
    headers: headersSecret,
  });

  return (
    <div className={`container block ${style.orders}`}>
      <h2>Your Orders</h2>
      <hr />
      <p className={style.orders__length}>Total {orders.length} Orders</p>
      {isLoading ? (
        <Fragment>
          <OrderShimmer />
          <OrderShimmer />
          <OrderShimmer />
          <OrderShimmer />
        </Fragment>
      ) : (
        <Fragment>
          {orders
            .sort((a, b) => b.created - a.created)
            .map((order) => (
              <Order key={order.id} order={order} />
            ))}
        </Fragment>
      )}
    </div>
  );
};

export default Orders;
