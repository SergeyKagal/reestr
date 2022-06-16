import { Footer } from '../../Footer/Footer';
import { Header } from '../../Header/Header';
import { Bell } from '../../Icons/Bell';
import { Down } from '../../Icons/Down';
import { Exit } from '../../Icons/Exit';
import { Meta } from '../../Icons/Meta';
import { ReestrIco } from '../../Icons/ReesrIco';
import { Security } from '../../Icons/Security';
import { User } from '../../Icons/User';
import './Account.scss';
import { AccountForm } from './AccountForm';

export const AccountSettings = () => {
  return (
    <>
      <Header></Header>
      <section className="account container pad-top-bottom">
        <h2 className="account__title">Личный кабинет</h2>
        <div className="account__wrapper">
          <nav className="account__nav">
            <ul className="account__nav-list">
              <li className="account__nav-list-item active">
                <User color="#009cb4"></User>
                <span style={{ color: '#009cb4' }}>Мои данные</span>
              </li>
              <li className="account__nav-list-item">
                <Bell color="#676a71"></Bell>
                <span>Уведомления</span>
              </li>
              <li className="account__nav-list-item">
                <ReestrIco color="#676a71"></ReestrIco>
                <span> Реестры</span>
              </li>
              <li className="account__nav-list-item">
                <Meta color="#676a71"></Meta>
                <span>Метаданные</span>
              </li>
              <li className="account__nav-list-item">
                <Security color="#676a71"></Security>
                <span>Безопасность</span>
              </li>
              <li className="account__nav-list-item">
                <Down color="#676a71"></Down>
                <span>Мои загрузки</span>
              </li>
              <li className="account__nav-list-item">
                <Exit />
                <span style={{ color: '#E0371F' }}>Выход</span>
              </li>
            </ul>
          </nav>
          <div className="account__right-side">
            <div className="account__right-side-header">
              <img src="./assets/images/user-img.png" alt="user-logo" />
              <h3>
                Здравствуй,<span>Захар</span> !
              </h3>
            </div>
            <div className="account__data">
              <h4>Основные данные</h4>
              <AccountForm />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
