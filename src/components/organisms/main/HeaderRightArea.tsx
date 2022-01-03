import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useAppSelector } from '../../../redux/hooks';

const HeaderRightArea = () => {
  const isCertified = useAppSelector(state => state.userState.is_certified);
  return (
    <HeaderRightAreaBox>
      <button>찾기</button>
      {isCertified ? (
        <>
          <button>새 글 작성</button>
          <button>User Icon</button>
          <button>User Menu</button>
        </>
      ) : (
        <Link to="/login">
          <Button label="로그인" />
        </Link>
      )}
    </HeaderRightAreaBox>
  );
};

const HeaderRightAreaBox = styled.div`
  display: flex;
  align-items: center;
`;

export default HeaderRightArea;
