import React from 'react';

export const Form = () => {
  return (
    <form className="auth-form">
      <label>
        Имя
        <input type="text" className="input-text" placeholder="Введите имя" />
      </label>
      <label>
        Пароль
        <input type="password" className="input-text" placeholder="Введите пароль" />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" className="auth-checkbox" />
        Запомнить меня на этом компьютере
      </label>
      <button className="auth-form-submit">Вход</button>
      <a href="/">Забыли свой пароль?</a>
    </form>
  );
};
