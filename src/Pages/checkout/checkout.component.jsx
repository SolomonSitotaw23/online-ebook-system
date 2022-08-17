import React from "react";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkoutItem/checkoutItem.component";
import { Button } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

const Checkout = () => {
  const user = useSelector((state) => state.loginOrLogout.user);
  console.log(user);

  const { cartItems } = useSelector((state) => state.cart);

  let totalPrice = cartItems.reduce(
    (total, cartItem) => total + cartItem.price,
    0
  );
  console.log(totalPrice);
  let formData = {
    total_price: totalPrice,
    email: user.email,
    first_name: user.first_name,
    last_name: user.first_name,
    book_id: "jsjsssssssss",
    user_id: user.id,
  };
  console.log(formData);

  const handlePayment = () => {
    console.log("hiii");
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": "myadminsecretkey",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.errors) {
          console.log(res.errors);
          alert("Something went wrong");
        } else {
          console.log(res.data.checkout_url);
          if (res.status === "success") {
            window.location.href = res.data.checkout_url;
          }
        }
      });
  };

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
          <span className=""></span>
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
      <Button
        variant="contained"
        endIcon={<PaidIcon />}
        onClick={handlePayment}
      >
        Proceed Payment{" "}
      </Button>
    </div>
  );
};

export default Checkout;
