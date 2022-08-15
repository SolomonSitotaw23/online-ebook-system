import React from "react";
import "./cartItems.styles.scss";

const CartItem = ({ book: { cover_photo, price, title, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={`http://localhost:5000${cover_photo}`} alt="item" />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x {price} birr
        </span>
      </div>
    </div>
  );
};

export default CartItem;
