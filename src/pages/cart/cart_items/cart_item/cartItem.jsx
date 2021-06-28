import React from "react";
import Button from "../../../../components/button/Button";
import { Remove, Add } from "@material-ui/icons";

const CartItem = ({ name, price, image, id, packetSize, size }) => {
  console.log({ name, price, image, id });
  return (
    <div className="cartItem">
      <img src={image} loading="lazy" alt={name} />
      <div>
        <h3>{name}</h3>
        <div>
          <p>
            {packetSize}: <span>{size}</span>
          </p>
        </div>
        <p>Estimated Delivery by 31 Jul 2021</p>
        <div>
          <p>Quantity:</p>
          <div>
            <Remove />
            <input type="number" name="" id="" />
            <Add />
          </div>
        </div>
        <h4>Total Amount: ₹1500</h4>
      </div>
      <Button name="Remove" classes="btn btn-primary" disabled={false} />
    </div>
  );
};

export default CartItem;
