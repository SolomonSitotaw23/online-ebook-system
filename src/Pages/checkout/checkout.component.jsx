import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  let totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="">Cover</span>
        </div>
        <div className="header-block">
          <span className="">Title</span>
        </div>
        <div className="header-block">
          <span className="">Quantity</span>
        </div>
        <div className="header-block">
          <span className="">Price</span>
        </div>
        <div className="header-block">
          <span className="">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Checkout;
