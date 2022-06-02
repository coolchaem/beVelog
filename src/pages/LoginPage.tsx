import React from 'react';
import LoginForm from '../components/organisms/LoginForm';
import kakaoLogin from '../assets/kakao_login_small.png';

const kakoClientId = '5aa736f2202b78af54a0878a77bd24e7';
const kakaoAuthUrl = 'https://kauth.kakao.com/oauth/authorize';
const kakaoRedirectUrl = 'http://localhost:9000/oauth/redirect';

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <a
        href={`${kakaoAuthUrl}?response_type=code&client_id=${kakoClientId}&redirect_uri=${kakaoRedirectUrl}`}
      >
        <img src={kakaoLogin} alt="login_kakao" />
      </a>
    </>
  );
};

export default LoginPage;
