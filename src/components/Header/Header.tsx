import { Link } from 'react-router-dom';
import { PATH } from '../../constants/pathes';
import { useAppSelector } from '../../hook';
import './Header.scss';

export const Header = () => {
  const { currentUser, notifyNumber } = useAppSelector((state) => state.app);
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
              <p className="notification-number">{notifyNumber}</p>
            </button>
          </div>
          <div className="user">
            <img src="./assets/images/user-img.png" alt="user-avatar" />
            <span className="user-name">{currentUser}</span>

            <button className="account-open-button button-32"></button>
          </div>
        </div>
      </div>
    </header>
  );
};
