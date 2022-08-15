import React from "react";
import "./checkoutItem.style.scss";
import { clearItemFromCart } from "../../redux/cart";
import { useDispatch } from "react-redux";
import { Tooltip, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CheckoutItem = ({ cartItem }) => {
  const { title, price, cover_photo, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={`http://localhost:5000${cover_photo}`} alt="" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        <Tooltip title="remove">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default CheckoutItem;
