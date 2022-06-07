import React, { useCallback } from 'react';
import LoginForm from '../components/organisms/LoginForm';
import kakaoLogin from '../assets/kakao_login_small.png';
import axios from 'axios';
import { API_HOST } from '../constant';

const LoginPage = () => {
  const handleClick = useCallback(() => {
    axios.get(`${API_HOST}/login/kakao`).then(response => {
      console.log(response.data);
      window.location.assign(response.data);
    });
  }, []);

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Enter') {
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <>
      <LoginForm />
      <div onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
        <img src={kakaoLogin} alt="login_kakao" />
      </div>
    </>
  );
};

export default LoginPage;
