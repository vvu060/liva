import React from "react";
import { useSelector } from "react-redux";
import { endpoints, headersPublic, headersSecret } from "../../endpoints";
import useFetch from "../../hooks/useFetch";
import { selectChecUserId } from "../../redux/features/user/userSlice";
import Order from "./order/Order";
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
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
