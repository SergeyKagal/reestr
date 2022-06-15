import { documents } from '../../../../constants/mocks/documents';

export const DocumentContent = () => {
  return (
    <ul className="document__list">
      {documents.map((document) => (
        <li className="document__list-item" key={document.id}>
          <div className="document-category">{document.category}</div>
          <div className="document-name">{document.name}</div>
          <div className="document-date">{document.date.toLocaleDateString()}</div>
          <div className="document-number">{document.number}</div>
          <a href={document.downloadLink} className="document-content">
            <span>Скачать</span>
            <span>{document.size}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
