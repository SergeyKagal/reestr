import './News.scss';
import { NewsList } from './NewsList';

export const News = () => {
  return (
    <section className="news__wrapper container pad-top-bottom">
      <header className="news__header">
        <h2 className="news__header-title">Новости реестра</h2>
      </header>
      <NewsList />
      <button className="news__button">Показать все</button>
    </section>
  );
};
