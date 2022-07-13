import React from "react";
import "./header.style.scss";

const Header = () => {
  return (
    <header>
      <div className="header__top sec__container">
        <div className="top__menu">
          <a className="top__menu-link" href>
            English
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
          <a className="top__menu-link" href>
            USD
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
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
            <a className="btn btn__link" href>
              Sign in
            </a>
            <a className="btn btn__primary rounded__pill" href>
              Sign up
            </a>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className="header__bottom sec__container">
        <div className="header__logo">
          <i className="icon ri-book-2-line"></i>
          <span className="logo__text">Bookze</span>
        </div>
        <div className="nav__menu">
          <a className="nav__menu-link" href>
            Category
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
          <a className="nav__menu-link" href>
            Writers
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
          <a className="nav__menu-link" href>
            Magazine
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
          <a className="nav__menu-link" href>
            Stationery
            <i className="icon ri-arrow-down-s-line"></i>
          </a>
        </div>
        <div className="basket">
          <a className="basket__link" href>
            <span className="basket__badge rounded__pill">3</span>
            <ion-icon
              name="cart"
              className="icon icon__basket ri-shopping-bag-line"
            ></ion-icon>
            Basket
            <i className="icon icon__arrow-down ri-arrow-down-s-line"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
