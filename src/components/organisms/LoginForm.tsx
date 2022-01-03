import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/react';
import InputButton from '../molecules/InputButton';
import { API_HOST } from '../../constant';
import axios from 'axios';
import { loginFail, loginSuccess } from '../../redux/reducers/UserSlice';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../redux/hooks';
import { User } from '../../types/User';
import { toast } from 'react-toastify';
import { ErrorToastOption, SuccessToastOption } from '../../styles/Toast';

const LoginForm = () => {
  const [isRegister, setRegister] = useState<boolean>(true);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onRegisterToggle = useCallback(() => {
    setRegister(!isRegister);
  }, [isRegister]);

  const onResult = useCallback(
    (email: string) => {
      const toastId = toast('로그인 중입니다.');
      axios
        .post(isRegister ? `${API_HOST}/login` : `${API_HOST}/users`, {
          user_name: email.split('@')[0],
          email_addr: email,
          velog_name: email.split('@')[0],
        })
        .then(response => {
          toast.update(toastId, {
            render: '로그인에 성공하였습니다.',
            ...SuccessToastOption,
          });
          console.table(response.data);
          const user: User = {
            is_certified: true,
            email: response.data.email_addr,
            username: response.data.user_name,
            id: response.data.velog_name,
            profile: response.data.profile,
            velogConfig: null,
          };
          dispatch(loginSuccess(user));
          navigate('/');
        })
        .catch(error => {
          toast.update(toastId, {
            render: '존재하지 않는 아이디입니다.',
            ...ErrorToastOption,
          });
          dispatch(loginFail());
        });
    },
    [isRegister, dispatch, navigate]
  );

  return (
    <div>
      <p css={{ fontSize: '1.25em' }}>{isRegister ? '로그인' : '회원가입'}</p>
      <p css={{ fontSize: '1em' }}> 이메일로 {isRegister ? '로그인' : '회원가입'} </p>
      <InputButton
        btnLabel={isRegister ? '로그인' : '회원가입'}
        inputPlachodler="이메일을 입력하세요."
        onResult={onResult}
      />
      <div>
        <span> {isRegister ? '아직 회원이 아니신가요?' : '계정이 이미 있으신가요?'} </span>
        <LabelButton onClick={onRegisterToggle}>{isRegister ? '회원가입' : '로그인'}</LabelButton>
      </div>
    </div>
  );
};

const LabelButton = styled.div`
  color: green;
  display: inline;
  font-weight: bold;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: lightGreen;
  }
`;

export default LoginForm;
