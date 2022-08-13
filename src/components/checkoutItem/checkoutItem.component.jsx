import React from "react";
import "./checkoutItem.style.scss";
import { clearItemFromCart } from "../../redux/cart";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const { title, price, cover_photo, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cover_photo} alt="" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
