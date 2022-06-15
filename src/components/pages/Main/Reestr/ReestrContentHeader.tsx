import React from 'react';

export const ReestrContentHeader = () => {
  return (
    <div className="reestr__content-header">
      <div className="registration-number">
        <button className="button-32 sort-button"></button>
        <span className="column-title">Регистрационный номер</span>
      </div>
      <div className="softs-name">
        <button className="button-32 sort-button"></button>
        <span className="column-title">Наименование программного обеспечения</span>
      </div>
      <div className="code-class">
        <span className="column-title">Код класса</span>
      </div>
      <div className="soft's-class">
        <span className="column-title">Класс программного обеспечения</span>
      </div>
      <div className="date-registration">
        <span className="column-title">Дата регистрации</span>
      </div>
      <div className="soft's-link">
        <span className="column-title">Адрес сайта</span>
      </div>
    </div>
  );
};
