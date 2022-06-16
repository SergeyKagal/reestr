import { Footer } from '../../Footer/Footer';
import { Header } from '../../Header/Header';
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
              <li className="account__nav-list-item">Мои данные</li>
              <li className="account__nav-list-item">Уведомления</li>
              <li className="account__nav-list-item">Реестры</li>
              <li className="account__nav-list-item">Метаданные</li>
              <li className="account__nav-list-item">Безопасность</li>
              <li className="account__nav-list-item">Мои загрузки</li>
              <li className="account__nav-list-item">Выход</li>
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
