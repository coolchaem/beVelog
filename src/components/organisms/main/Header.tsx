import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import HeaderRightArea from './HeaderRightArea';

const Header = () => {
  return (
    <HeaderStyle>
      <InnerBox>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderRightArea />
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
