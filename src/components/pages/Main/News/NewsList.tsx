import { newsList } from '../../../../constants/mocks/news';

export const NewsList = () => {
  return (
    <ul className="news__list">
      {newsList.map((newsItem) => (
        <li key={newsItem.id}>
          <a href={newsItem.sourceUrl}>
            <div className="image-wrapper">
              {' '}
              <img src={`../../assets/images/${newsItem.imageUrl}`} alt={newsItem.newsTitle} />
            </div>
            <div className="news__item">
              <h3 className="news__item-title">{newsItem.newsTitle}</h3>
              <div className="news__item-date">{newsItem.newsDate.toLocaleDateString()}</div>
              <div className="news__item-content">{newsItem.newsContent}</div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
