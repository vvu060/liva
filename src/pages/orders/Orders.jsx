import React from "react";
import { useSelector } from "react-redux";
import { endpoints, headersPublic, headersSecret } from "../../endpoints";
import useFetch from "../../hooks/useFetch";
import { selectChecUserId } from "../../redux/features/user/userSlice";

const Orders = () => {
  const userId = useSelector(selectChecUserId);
  const {
    response: orders,
    isError,
    isLoading,
  } = useFetch(`${endpoints.customers}/cstmr_yA6nldm9nBwEWb/orders`, {
    headers: headersSecret,
  });

  console.log({ orders, userId });

  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

export default Orders;
