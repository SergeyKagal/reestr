import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from './constants/pathes';
import { Main } from './components/Main/Main';
import { Authorization } from './components/Authorization/Authorization';
import { AccountSettings } from './components/AccountSettings/AccountSettings';
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.MAIN} element={<Main />} />
        <Route path={PATH.AUTHORIZATION} element={<Authorization />} />
        <Route path={PATH.ACCOUNT_SETTINGS} element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
};
