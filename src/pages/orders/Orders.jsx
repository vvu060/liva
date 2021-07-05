import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { endpoints, headersPublic, headersSecret } from "../../endpoints";
import useFetch from "../../hooks/useFetch";
import { selectChecUserId } from "../../redux/features/user/userSlice";
import Order from "./order/Order";
import OrderShimmer from "../../components/loading/orders/OrderShimmer";
import style from "./Orders.module.scss";

const Orders = () => {
  const userId = useSelector(selectChecUserId);
  const {
    response: orders,
    isError,
    isLoading,
  } = useFetch(`${endpoints.customers}/cstmr_yA6nldm9nBwEWb/orders`, {
    headers: headersSecret,
  });

  return (
    <div className={`container ${style.orders}`}>
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
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default Orders;
