import React, { useState } from "react";
import "./SearchHolder.style.css";
import Logo from "../../assets/ADS-1.png";
const SearchHolder = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{marginTop: "2rem"}}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className="logo-cont">
          <img src={Logo} className="logo" alt="Logo" />
        </div>
        <div className="input-holder">
          <input className="input-field" />
          <label for="select-product-type"></label>
          <select id="select-product-type" className="select">
            <option value selected={true}>
              All categories
            </option>
          </select>
          <div className="search-submit">
            <svg
              focusable="false"
              class="icon icon--search "
              viewBox="0 0 21 21"
              role="presentation"
            >
              <g
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              >
                <path d="M19 19l-5-5" stroke-linecap="square"></path>
                <circle cx="8.5" cy="8.5" r="7.5"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="logins">
          <div className="links">
            <p className="mere">login / register</p>
            <h4 className="account">my account</h4>
          </div>
        </div>
        <div className="cart">
          <div className="cart-state-holder">
            <svg
              focusable="false"
              className="icon icon--cart "
              viewBox="0 0 27 24"
              role="presentation"
            >
              <g
                transform="translate(0 1)"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                fill-rule="evenodd"
              >
                <circle stroke-linecap="square" cx="11" cy="20" r="2"></circle>
                <circle stroke-linecap="square" cx="22" cy="20" r="2"></circle>
                <path d="M7.31 5h18.27l-1.44 10H9.78L6.22 0H0"></path>
              </g>
            </svg>
            <div className="cart-state">
                0
            </div>
          </div>
          <h4 className="account">cart</h4>
        </div>
      </nav>

      <div className={menu_class}></div>
    </div>
  );
};

export default SearchHolder;
