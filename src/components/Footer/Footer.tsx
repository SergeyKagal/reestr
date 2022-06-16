import './Footer.scss';
import { Link } from 'react-router-dom';
import { PATH } from '../../constants/pathes';

export const Footer = () => {
  return (
    <footer className="footer  container pad-top-bottom">
      <div className="footer__wrapper">
        <div className="footer__owner">
          <div className="owner">
            <Link to={PATH.MAIN} className="footer__owner-link">
              <img src="./assets/images/logo.svg" alt="reestr-logo" />
            </Link>
            <p>
              Открытое акционерное общество «Реестр ПО» начало практическую деятельность 1 марта
              2014 г
            </p>
          </div>
          <div className="developer">
            <h3>Разработчик</h3>
            <p>ОАО «Агентство сервисизации и реинжиниринга»</p>
            <p className="developer-adress">Минск, улица Клары Цеткин, 24</p>
          </div>
        </div>
        <nav className="footer__nav">
          <h2 className="footer__nav-title">Информация</h2>
          <ul>
            <li className="footer__nav-item">
              <a href="#reestr">Реестры</a>
            </li>
            <li className="footer__nav-item">
              <a href="#news">Новости</a>
            </li>
            <li className="footer__nav-item">
              <a href="#docs">Документы</a>
            </li>
            <li className="footer__nav-item">
              <a href="#faq">Вопросы</a>
            </li>
          </ul>
        </nav>
        <div className="footer__support">
          <h2 className="footer__nav-title">Техническая поддержка</h2>
          <p className="footer__support-text">
            Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных
            дней.
          </p>
          <p>+375 25 111 22 33 </p>
          <p>+375 29 222 44 55</p>
          <p>ReestrPOsupport@mail.ru</p>
        </div>
        <div className="footer__contacts">
          <h2 className="footer__nav-title">Контакты</h2>
          <p>+375 33 112 22 45</p>
          <p>+375 29 222 44 88</p>
          <p>ReesrtPO@mail.ru</p>
          <p>220004 г. Минск, ул. Карла Маркса, 38</p>
          <a href="/">Связаться с поддержкой</a>
        </div>
      </div>
      <div className="copyright">© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</div>
    </footer>
  );
};
