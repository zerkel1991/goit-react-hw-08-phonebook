import React from 'react';
import { Container } from 'react-bootstrap';
import LoginFormGroup from '../../FormGroup/LoginFormGroup';
import s from './LoginPage.module.css';




export const LoginPage = () => {



  return (
    <Container className={s.container}>
      <img className={s.logo} src="https://svgshare.com/i/mQC.svg" alt="logo" />
      <h1 className={s.title}>Please sign in</h1>
      <LoginFormGroup />
    </Container>
  );
};
