import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import { endpoints, headersPublic } from "../../../endpoints";
import { selectTotalAmount } from "../../../redux/features/cart/cartSlice";
import style from "./PriceSummary.module.scss";

const PriceSummary = () => {
  const cartId = localStorage.getItem("cart_id");
  const totalAmount = useSelector(selectTotalAmount);

  // let params = {
  //   type: "permalink",
  // };

  useEffect(() => {
    fetch(`${endpoints.checkout}/${cartId}?type=cart`, {
      method: "GET",
      headersPublic,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={`block ${style.price}`}>
      <h2>Price Details</h2>
      <div className={style.price__details}>
        <div className={style.price__detail}>
          Total Product Price(4) <p>{totalAmount}</p>
        </div>
        <div className={style.price__detail}>
          Shipping Cost <p>₹100</p>{" "}
        </div>
        <div className={style.price__detail}>
          Total Amount <p>{totalAmount}</p>{" "}
        </div>
      </div>
      <div className={style.price__button}>
        <Button name="Checkout" classes="btn btn-primary" disabled={false} />
      </div>
    </div>
  );
};

export default PriceSummary;
