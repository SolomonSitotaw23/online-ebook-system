import React from "react";
import { Link } from "react-router-dom";
import CartDropdown from "../cartDropdown/cartDropdown.component";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartDropDown } from "../../redux/cart";

const BottomHeader = () => {
  const { isCartDropDownHidden } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <div className="header__bottom sec__container">
      <Link to="/">
        <div className="header__logo">
          <i className="icon ri-book-2-line"></i>
          <span className="logo__text">Bookze</span>
        </div>
      </Link>

      <div className="nav__menu">
        <Link to="/books">
          <a className="nav__menu-link" href>
            Category
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
        </Link>

        <a className="nav__menu-link" href>
          Writers
          <i className="icon ri-arrow-down-s-line"></i>
        </a>

        <a className="nav__menu-link" href>
          My Shelf
          <i className="icon ri-arrow-down-s-line"></i>
        </a>
      </div>
      <div className="basket">
        <button
          onClick={() => dispatch(toggleCartDropDown())}
          className="basket__link"
        >
          <span className="basket__badge rounded__pill">
            {cartItems.length}
          </span>
          <ion-icon
            name="cart"
            className="icon icon__basket ri-shopping-bag-line"
          ></ion-icon>
          <i className="icon icon__arrow-down ri-arrow-down-s-line"></i>
        </button>
        {isCartDropDownHidden ? <CartDropdown /> : null}
      </div>
    </div>
  );
};

export default BottomHeader;
