import './Document.scss';

export const DocumentHeader = () => {
  return (
    <header className="document__header">
      <h2 className="document__header-title">Документы</h2>
      <div className="document__header-info">
        <span className="text">Всего документов: </span>
        <span className="num">5</span>
      </div>
    </header>
  );
};
