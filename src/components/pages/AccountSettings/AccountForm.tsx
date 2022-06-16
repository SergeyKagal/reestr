import React from 'react';

export const AccountForm = () => {
  return (
    <form className="account__form">
      <div className="account__form-input-wrapper">
        <label>
          Имя
          <input type="text" value="Захар" className="input-text" />
        </label>
        <label>
          Фамилия
          <input type="text" value="Палазник" className="input-text" />
        </label>
        <label>
          Отчество
          <input type="text" value="Геннадьевич" className="input-text" />
        </label>
        <label>
          Страна
          <input type="text" value="Беларусь" className="input-text" />
        </label>
        <label>
          Город
          <input type="text" value="Минск" className="input-text" />
        </label>
        <label>
          Мобильный телефон
          <input type="text" value="+375 25 731 26 46" className="input-text" />
        </label>
      </div>
      <h4 className="account__password-header">Пароль</h4>
      <div className="account__password">
        <label>
          Новый пароль
          <input type="text" value="**********" className="input-text" />
        </label>
        <label>
          Подтверждение пароля
          <input type="text" value="**********" className="input-text" />
        </label>
      </div>
      <button className="account-submit">Сохранить</button>
    </form>
  );
};
