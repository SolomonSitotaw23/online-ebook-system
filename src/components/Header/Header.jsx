import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BottomHeader from "./bottomHeader";
import { logout } from "../../redux/login";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.loginOrLogout.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="header__top sec__container">
        <div className="top__menu">
          <a className="top__menu-link" href>
            Help
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
        </div>
        <div className="search__bar">
          <input
            className="search__bar-input"
            type="search"
            placeholder="Search"
          />
          <i className="icon ri-search-line"></i>
        </div>
        <div className="user__bar">
          <div className="btn__group">
            {isLoggedIn ? (
              <Link to="/signin">
                <button
                  className="btn btn__link"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/signin">
                <a className="btn btn__primary rounded__pill" href>
                  Login or SignUp
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="line"></div>

      <BottomHeader />
    </header>
  );
};

export default Header;
