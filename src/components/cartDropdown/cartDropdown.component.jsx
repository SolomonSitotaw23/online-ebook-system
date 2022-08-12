import React from "react";
import "./cartDropdown.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartItem/cartItem.component";
import { useNavigate } from "react-router-dom";
import { toggleCartDropDown } from "../../redux/cart";
const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="cart__items">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} book={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <button
        onClick={() => {
          navigate("checkout");
          dispatch(toggleCartDropDown());
        }}
      >
        goto Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
