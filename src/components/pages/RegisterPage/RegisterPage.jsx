import React from 'react';
import { Container } from 'react-bootstrap';
import RegisterFormGroup from '../../FormGroup/RegisterFormGroup'
import s from './RegisterPage.module.css'
export const RegisterPage = () => {
  return (
    <Container className={s.container}>
       <img className={s.logo} src="https://svgshare.com/i/mQC.svg" alt="logo" />
      <h1 className={s.title}>Please fill registration form</h1>
    <RegisterFormGroup/>
    </Container>
  );
};
