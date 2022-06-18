import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/pathes';
import { useAppDispatch } from '../../../hook';
import { userLogIn } from '../../../store/appSlice';

export const Form = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      <button
        className="auth-form-submit"
        onClick={() => {
          dispatch(userLogIn());
          navigate(PATH.MAIN);
        }}
      >
        Вход
      </button>
      <a href="/">Забыли свой пароль?</a>
    </form>
  );
};
