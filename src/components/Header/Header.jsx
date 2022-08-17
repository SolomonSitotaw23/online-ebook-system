import "./header.style.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/login";
import { toggleCartDropDown } from "../../redux/cart";
import CartDropdown from "../cartDropdown/cartDropdown.component";
import { Button } from "@mui/material";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.loginOrLogout.isLoggedIn);
  const user = useSelector((state) => state.loginOrLogout.user);
  const { isCartDropDownHidden } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  console.log(user.isAuthor);
  return (
    <header>
      <div className="header__top sec__container">
        <div className="top__menu">
          <Link to="/">
            <div className="header__logo">
              <i className="icon ri-book-2-line"></i>
              <span className="logo__text">Bookze</span>
            </div>
          </Link>
          <div className="nav__menu">
            <Link to="/books" className="nav__menu-link">
              Category
              <i className="icon ri-arrow-down-s-line"></i>
            </Link>
          </div>
          <div className="nav__menu">
            {user.isAuthor ? (
              <Link to="/upload" className="nav__menu-link">
                Upload Book
                <i className="icon ri-arrow-down-s-line"></i>
              </Link>
            ) : null}
          </div>
          <div className="nav__menu">
            <Link to="/myBooks" className="nav__menu-link">
              My Library
              <i className="icon ri-arrow-down-s-line"></i>
            </Link>
          </div>
        </div>
        {/* <div className="search__bar">
          <input
            className="search__bar-input"
            type="search"
            placeholder="Search"
          />
          <i className="icon ri-search-line"></i>
        </div> */}
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
        <div className="user__bar">
          <div className="btn__group">
            {isLoggedIn ? (
              <Link to="/login">
                <Button
                  onClick={() => {
                    onLogout();
                  }}
                  color="secondary"
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to="/signin">
                <button className="btn btn__primary rounded__pill">
                  Login or SignUp
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </header>
  );
};

export default Header;
