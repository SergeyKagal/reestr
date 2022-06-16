import './Authorization.scss';
import { Footer } from '../../Footer/Footer';
import { Header } from '../../Header/Header';
import { Form } from './Form';

export const Authorization = () => {
  return (
    <>
      <Header />
      <section className="authorization container pad-top-bottom">
        <div className="authorization__wrapper">
          <h2 className="authorization__title">Авторизация</h2>
          <Form />
          <div className="authorization__buttons">
            <button>Авторизация с использованием ЕС ИФЮЛ</button>
            <button>Авторизация с использованием МСИ</button>
          </div>
          <div className="unregistred">
            <p>У вас нет аккаунта?</p>
            <a href="/">Нажмите сюда чтобы создать</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
