import React from 'react';
import { Container } from 'react-bootstrap';
import RegisterFormGroup from '../../FormGroup/RegisterFormGroup'
import { useSelector } from 'react-redux';
import s from './RegisterPage.module.css';

export const RegisterPage = () => {

  const error = useSelector(state => state.auth.user.regError)
console.log(error)
  return (
    <Container className={s.container}>
       <img className={s.logo} src="https://svgshare.com/i/mQC.svg" alt="logo" />
      <h1 className={s.title}>Please fill registration form</h1>
    <RegisterFormGroup/>
    {error && <h2>Такой пользователь есть</h2>}
    </Container>
  );
};
