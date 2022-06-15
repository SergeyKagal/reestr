import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/pathes';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__left-side">
          <Link className="header__link" to={PATH.MAIN}>
            <img src="./assets/images/logo.svg" alt="reestr-logo" />
          </Link>
          <form className="header__search-bar">
            <input type="text" placeholder="Поиск" className="header__search-input" />
          </form>
        </div>
        <div className="header__right-side">
          <div className="tools">
            <button className="dates"></button>
            <button className="notification">
              <p className="notification-number">4</p>
            </button>
          </div>
          <div className="user">
            <img src="./assets/images/user-img.png" alt="user-avatar" />
            <span className="user-name">Захар Палазник</span>

            <button className="account-open-button button-32"></button>
          </div>
        </div>
      </div>
    </header>
  );
};
