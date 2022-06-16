import { Link } from 'react-router-dom';
import { PATH } from '../../constants/pathes';
import { useAppDispatch, useAppSelector } from '../../hook';
import { showHideMenu } from '../../store/appSlice';
import './Header.scss';

export const Header = () => {
  const { currentUser, notifyNumber, isHeaderMenuOpen } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

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

            <button
              className={
                !isHeaderMenuOpen
                  ? 'account-open-button button-32'
                  : 'account-open-button button-32 menu-open'
              }
              onClick={() => dispatch(showHideMenu())}
            ></button>
            {isHeaderMenuOpen && (
              <ul className="header__nav-menu">
                <li>
                  <Link to={PATH.AUTHORIZATION}>Авторизация</Link>
                </li>
                <li>
                  <Link to={PATH.ACCOUNT_SETTINGS}>Личный кабинет</Link>
                </li>
                <li>
                  <Link to={PATH.MAIN}>Главная страница</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
