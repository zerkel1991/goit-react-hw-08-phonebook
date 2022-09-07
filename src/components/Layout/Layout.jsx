import { LoginPage } from '../pages/LoginPage/LoginPage';
import { NavLink,Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import s from './Layout.module.css';
export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header className={s.header}>
        {!isLoggedIn ? (
          <div className={s.NavLink__container}>
            <NavLink
              className={s.NavLink}
              to="/register"
              element={<LoginPage />}
            >
              Registration
            </NavLink>
            <NavLink className={s.NavLink} to="/login" element={<LoginPage />}>
              Login
            </NavLink>
          </div>
        ) : (
          <UserMenu />
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <span>2022</span>
      </footer>
    </>
  );
};
