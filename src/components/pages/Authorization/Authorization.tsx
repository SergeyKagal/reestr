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
        </div>
      </section>
      <Footer />
    </>
  );
};
