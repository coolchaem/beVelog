import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';

const Header = () => {
  return (
    <HeaderStyle>
      <InnerBox>
        <Link to="/">
          <img src={Logo} />
        </Link>
        <RightArea>
          <button>찾기</button>
          <button>새 글 작성</button>
          <button>User Icon</button>
          <button>User Menu</button>
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
  display:flex;
  align-items: center;
  justify-content: space-between;
`

const RightArea = styled.div`
  display: flex;
  align-items: center;
`