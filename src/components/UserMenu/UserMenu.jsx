import { useSelector, useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  return (
    <div className={s.userMenu__container}>
      <h2 className={s.useMenu__title}>Welcome,{userName}!</h2>
      <Button onClick={() => dispatch(logOut())} variant="primary">
        LogOut
      </Button>{' '}
    </div>
  );
};
