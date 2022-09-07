import React from 'react';
import { Container } from 'react-bootstrap';
import LoginFormGroup from '../../FormGroup/LoginFormGroup';
import s from './LoginPage.module.css';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const LoginPage = () => {
const isLoggIn = useSelector(authSelectors.getIsLoggedIn)
const navigate = useNavigate()

  useEffect(() => {

    if(isLoggIn){
      navigate('/contacts')
    }


  }, [isLoggIn,navigate])



  return (
    <Container className={s.container}>
      <img className={s.logo} src="https://svgshare.com/i/mQC.svg" alt="logo" />
      <h1 className={s.title}>Please sign in</h1>
      <LoginFormGroup />
    </Container>
  );
};
