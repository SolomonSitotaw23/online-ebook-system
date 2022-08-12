import React from "react";
import "./checkoutItem.style.scss";

const CheckoutItem = ({
  cartItem: { title, price, cover_photo, quantity },
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cover_photo} alt="" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
