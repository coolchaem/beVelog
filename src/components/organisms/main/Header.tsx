import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import Button from '../../atoms/Button';
import { useAppSelector } from '../../../redux/hooks';

const RigthAreaComponent = () => {
  const isCertified = useAppSelector(state => state.userState.is_certified);
  return !isCertified ? (
    <Link to="/login">
      <Button label="로그인" />
    </Link>
  ) : (
    <>
      <button>새 글 작성</button>
      <button>User Icon</button>
      <button>User Menu</button>
    </>
  );
};

const Header = () => {
  return (
    <HeaderStyle>
      <InnerBox>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <RightArea>
          <button>찾기</button>
          <RigthAreaComponent />
        </RightArea>
      </InnerBox>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  height: 4rem;
`;

const InnerBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightArea = styled.div`
  display: flex;
  align-items: center;
`;
