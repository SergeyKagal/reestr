import React from 'react';

export const DocumentContentHeader = () => {
  return (
    <div className="document__content-header">
      <div className="document-category">
        <span className="column-title">Категория</span>
      </div>
      <div className="document-name">
        <span className="column-title">Наименование </span>
      </div>
      <div className="document-date">
        <span className="column-title">Дата</span>
      </div>
      <div className="document-number">
        <span className="column-title">Номер</span>
      </div>
      <div className="document-content">
        <span className="column-title">Содержание</span>
      </div>
    </div>
  );
};
